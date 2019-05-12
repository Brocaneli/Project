import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { AlunosService } from '../alunos.service';
import { ColaboradoresService } from '../colaboradores.service';

@Component({
  selector: 'app-permissions-detail',
  templateUrl: './permissions-detail.component.html',
  styleUrls: ['./permissions-detail.component.css']
})
export class PermissionsDetailComponent implements OnInit {

  private id: any;
  private user: any;
  private classes: any;
  private colaborators: any;
  private registrations: any;

  constructor(private activatedRoute: ActivatedRoute, 
              private usersService: UsersService, 
              public alunoService: AlunosService,
              public colaboradorService: ColaboradoresService
              ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.id = params['id'];
    })

    this.usersService.getUser(this.id).subscribe((data) => {
      this.user = data;
    });

    this.alunoService.getAllClassFromAluno(this.id).subscribe((data) => {
      this.classes = data;
    });

    this.colaboradorService.getAllClassFromCollaborator(this.id).subscribe((data) => {
      this.colaborators = data;
    })
  }

  updateUser(){
    var e = (document.getElementById("select")) as HTMLSelectElement;;
    var role = e.options[e.selectedIndex].text;
    switch(role){
      case "Administrador": {
        this.user.role = "ADMIN";
        break;
      }
      case "Colaborador": {
        this.user.role = "COLAB";
        break;
      }
      case "Aluno": {
        this.user.role = "ALUNO";
        break;
      }
    }
    this.usersService.updateUser(this.user).subscribe(()=>{
      console.log(this.user)
      console.log("Updated successfully")
    });
  }

}
