import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { MatriculasService } from '../matriculas.service';
import { AulasService } from '../aulas.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { PresencasService } from '../presencas.service';

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
  classes: any;
  presences: any;

  constructor(private turmasService: TurmaService,
    private matriculaService: MatriculasService,
    private aulaService: AulasService,
    private presenceService: PresencasService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {

    this.matriculas = [];
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
      this.aulaService.getAllAulasFromCiclo(this.turma.ciclo.id).subscribe((data) => {
        this.classes = data;
        var actual_class_id = this.classes[this.turma.actual_class].id;
        this.presenceService.getAllPresencesFromClass(actual_class_id).subscribe((data) => {
          this.presences = data;
        });
      });
    });

    this.matriculaService.getAllMatriculasFromTurma(this.turma_id).subscribe((data) => {
      this.matriculas = data;
      this.matriculas.forEach(element => {
        element['presence'] = false
      });
      this.matriculas.sort((a, b) => (a.user.name > b.user.name) ? 1 : -1)
    });

  }

  markPresence() {
    if (!this.turma.first_attendance) {
      this.matriculas.forEach(element => {
        var presence = 0;
        if (element.presence) {
          presence = 1;
        }
        var new_presence = {
          aula: this.classes[this.turma.actual_class].id,
          user: element.user.id, presences: presence, is_replacement: false
        };
        this.presenceService.createPresence(new_presence).subscribe(() => {
          console.log("Presences added")
        });

      });
      var turma_up = this.turma
      turma_up.first_attendance = true
      turma_up.ciclo = this.turma.ciclo.id
      console.log(turma_up)
      this.turmasService.updateTurma(turma_up).subscribe(() => {
        console.log("Turma updated")
      });
    } else {
      console.log(this.presences)
      var con = 0;
      this.matriculas.forEach(element => {
        var presence_up = this.presences[con]
        if (element.presence) {
          console.log(presence_up.presences)
          presence_up.presences = presence_up.presences + 1;
          console.log(presence_up.presences)
        }
        presence_up.aula = presence_up.aula.id
        presence_up.user = presence_up.user.id
        console.log(presence_up)
        this.presenceService.updatePresence(presence_up).subscribe(() => {
          console.log("Presence updated")
        });
        con++
      });
      var turma_up = this.turma
      turma_up.first_attendance = false
      turma_up.actual_class = this.turma.actual_class + 1;
      turma_up.ciclo = this.turma.ciclo.id
      console.log(turma_up)
      this.turmasService.updateTurma(turma_up).subscribe(() => {
        console.log("Turma updated")
      });
    }

  }

  selectInput(matricula) {
    matricula['presence'] = !matricula.presence;
  }

}
