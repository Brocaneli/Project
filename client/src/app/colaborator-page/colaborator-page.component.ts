import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AvisoService } from '../aviso.service';
import { ColaboradoresService } from '../colaboradores.service';

@Component({
  selector: 'app-colaborator-page',
  templateUrl: './colaborator-page.component.html',
  styleUrls: ['./colaborator-page.component.css']
})
export class ColaboratorPageComponent implements OnInit {
  panelOpenState = false;

  private avisos : any;
  private user : any;
  private colaborador : any;
  
  constructor(
    private avisoService: AvisoService, 
    private matriculasService: ColaboradoresService,
    private authenticationService: AuthenticationService,
    private router: Router,

  ) {
    let user = this.authenticationService.currentUserValue;
    if (!user) { 
        //this.router.navigate(['login']);
    } else {
      this.user= user;
    }
   }

   ngOnInit() {
    this.avisoService.getAvisos().subscribe(data => {
      this.avisos = data;
    });
    this.matriculasService.getAllClassFromCollaborator(this.user.id).subscribe(data => {
      this.colaborador = data;
    });
  }

  onClick_aulasCadastradas(){
    this.router.navigate(['login']);
  }  
  onClick_listaAlunos(){
    this.router.navigate(['login']);
  }  
  onClick_chamada(){
    this.router.navigate(['login']);
  }

}
