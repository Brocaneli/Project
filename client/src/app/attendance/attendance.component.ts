import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { MatriculasService } from '../matriculas.service';
import { AulasService } from '../aulas.service';
import { AuthenticationService } from '../authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  turma_id = 1;
  turma: any;
  matriculas: any;
  class: any;
  private user: any

  constructor(private turmasService: TurmaService,
    private matriculaService: MatriculasService,
    private aulaService: AulasService,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {

    let user = this.authenticationService.currentUserValue;
    if (!user || user.role === 'ALUNO') {
      this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

  ngOnInit() {
    this.turmasService.getTurma(this.turma_id).subscribe((data) => {
      this.turma = data;
    });

    this.matriculaService.getAllMatriculasFromTurma(this.turma_id).subscribe((data) => {
      this.matriculas = data;
    });

    this.matriculas.sort((a, b) => (a.user.name > b.user.name) ? 1 : -1)
  }

}
