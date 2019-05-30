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
  private colaboradores : any;
  
  constructor(
    private avisoService: AvisoService, 
    private matriculasService: ColaboradoresService,
    private authenticationService: AuthenticationService,
    private router: Router,

  ) {
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role === 'ALUNO') { 
        this.router.navigate(['login']);
    } else {
      this.user= user;
    }
   }

   ngOnInit() {

    this.matriculasService.getAllClassFromCollaborator(this.user.id).subscribe(data => {
      this.colaboradores = data;
    
      let turmaIds = this.colaboradores.map((mat) => mat.turma.id)

      this.avisoService.getAvisos().subscribe(data => {
        let allAvisos: any = data;
        this.avisos = allAvisos.filter((aviso) => {
          return turmaIds.indexOf(aviso.turma.id) >= 0
        });
      });
    });
  }
}