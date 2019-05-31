import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulasService } from '../aulas.service';
import { AuthenticationService } from '../authentication.service';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-aula-page',
  templateUrl: './aula-page.component.html',
  styleUrls: ['./aula-page.component.css']
})
export class AulaPageComponent implements OnInit {

  private user: any;
  private aulas: any;
  private id: number
  private turma: any;

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private aulasService: AulasService, 
    private turmaService: TurmaService,
    private authenticationService: AuthenticationService) {
    let user = this.authenticationService.currentUserValue;
    if (false) {
      this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

  ngOnInit() {

    
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];

        this.turmaService.getTurma(this.id).subscribe((data)=>{
          this.turma = data

          this.aulasService.getAllAulasFromCiclo(this.turma.ciclo.id).subscribe(data => {
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
