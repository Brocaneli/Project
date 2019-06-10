import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { MatriculasService } from '../matriculas.service';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  private user: any
  matriculas: any
  turma_id: any
  element: any

  constructor(
    private matriculaService: MatriculasService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 

      let user = this.authenticationService.currentUserValue;
      if (!user || user.role === 'ALUNO') {
        this.router.navigate(['login']);
      } else {
        this.user = user;
      }

    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.turma_id = data['id']
      this.matriculaService.getAllApprovedMatriculasFromTurma(this.turma_id).subscribe(data => {
        this.matriculas = data
        this.matriculas.sort((a, b) => {
          if (a.user.name.toUpperCase() > b.user.name.toUpperCase()) {
            return 1;
          }
          if (a.user.name.toUpperCase() < b.user.name.toUpperCase()) {
            return -1;
          }
          return 0;
        });
      });
    });
  }

  updateNota(matricula, $event) {
    matricula.nota = $event.target.value
    console.log(matricula.nota)
  }

  saveGrades() {
    this.matriculas.forEach(element => {
      element.user = element.user.id
      element.turma = element.turma.id
      this.matriculaService.updateMatricula(element).subscribe(data => {
        console.log(data)
      })
    });
  }



}



