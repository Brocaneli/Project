import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulasService } from '../aulas.service';
import { AuthenticationService } from '../authentication.service';
import { TurmaService } from '../turma.service';
import { CiclosService } from '../ciclos.service';

@Component({
  selector: 'app-aula-page',
  templateUrl: './aula-page.component.html',
  styleUrls: ['./aula-page.component.css']
})
export class AulaPageComponent implements OnInit {

  private user: any;
  private aulas: any;
  private id: number
  private ciclo: any;
  private allowCreate = false;

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private aulasService: AulasService, 
    private cicloService: CiclosService,
    private authenticationService: AuthenticationService) {
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role === 'ALUNO') {
      this.router.navigate(['login']);
    } else {
      if (user.role === 'ADMIN') {
        this.allowCreate = true;
      }
      this.user = user;
    }
  }

  ngOnInit() {

    
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];

        this.cicloService.getCiclo(this.id).subscribe((data)=>{
          this.ciclo = data

          this.aulasService.getAllAulasFromCiclo(this.ciclo.id).subscribe(data => {
            this.aulas = data;
          });
        });
      });




  }

  deleteAula(id: number) {
    this.aulasService.deleteAula(id).subscribe(data => {
      // ciclo deleted
    });

    window.location.reload();
  }
}
