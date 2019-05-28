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

  // query itens
  cicloQuery: any
  turmaQuery: any
  queryAllowed = false

  turma_id = 1;
  turma: any;
  matriculas: any;
  class: any;
  private user: any
  classes: any;
  presences: any;
  class_registered = true;
  replacement: any;

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

        if(this.turma.actual_class < this.classes.length){
          var actual_class_id = this.classes[this.turma.actual_class].id;
          this.presenceService.getAllPresencesFromClass(actual_class_id).subscribe((data) => {
            this.presences = data;
          });
  
          this.matriculaService.getAllMatriculasFromTurma(this.turma_id).subscribe((data) => {
            this.matriculas = data;
            this.matriculas.forEach(element => {
              element['presence'] = false
            });
            this.matriculas.sort((a, b) => (a.user.name > b.user.name) ? 1 : -1)
            this.presenceService.getAllReplacementFromAula(actual_class_id, this.turma_id).subscribe((data) => {
              this.replacement = data
              this.replacement.forEach(element => {
                this.matriculaService.getMatriculaBetweenUserAndTurma(element.original_turma, element.user.id).subscribe((data) => {
                  var new_matricula = data[0];
                  new_matricula['presence'] = false
                  this.matriculas.push(new_matricula)
                });
              });
            });
          });

        }else{
          this.class_registered = false;
        }

      });
    });

  }

  allowQuery(){
    this.queryAllowed = !this.queryAllowed
    this.cicloQuery = null;
    this.turmaQuery = null;
  }

  cicloChose(cicloId: any) {
    this.cicloQuery = cicloId;
  }

  turmaChose(turmaId: any) {
    this.turmaQuery = turmaId;
  }

  studentsChose(matriculaId: any) {
    var new_matricula;
    this.matriculaService.getMatricula(matriculaId).subscribe((data) => {
      new_matricula = data;
      new_matricula['presence'] = false
      this.matriculas.push(new_matricula)
      this.allowQuery();
    });
  }

  markPresence() {
    if (!this.turma.first_attendance) {
      this.matriculas.forEach(element => {
        var presence = 0;
        if (element.presence) {
          presence = 1;
        }

        var is_replacement
        if(element.turma.id != this.turma.id){
          is_replacement = true;
        }else{
          is_replacement = false;
        }
        var new_presence = {aula: this.classes[this.turma.actual_class].id, 
          user: element.user.id, presences: presence, is_replacement: is_replacement, turma: this.turma.id};
        this.presenceService.createPresence(new_presence).subscribe(() => {
          console.log("Presences added")
        });

      });
      var turma_up = this.turma
      turma_up.first_attendance = true
      turma_up.ciclo = this.turma.ciclo.id
      this.turmasService.updateTurma(turma_up).subscribe(() => {
        console.log("Turma updated")
      });
    }else{
      var con = 0;
      this.matriculas.forEach(element => {
        var presence_up = this.presences[con]
        if(element.presence){
          presence_up.presences = presence_up.presences + 1;
        }
        presence_up.turma = presence_up.turma.id
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
      this.turmasService.updateTurma(turma_up).subscribe(() => {
        console.log("Turma updated")
      });
    }

  }

  selectInput(matricula) {
    matricula['presence'] = !matricula.presence;
  }

}
