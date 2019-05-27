import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { MatriculasService } from '../matriculas.service';
import { AulasService } from '../aulas.service';
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
  classes: any;
  presences: any;

  // class = {id:1, turma_id:2, date: new Date()}

  // students = [
  //   {id: 3, turma_id:2, name: "João"}, 
  //   {id: 6, turma_id:2, name: "Julia"}, 
  //   {id: 5, turma_id:2, name: "Marcus"},
  //   {id: 10, turma_id:2, name: "Marília"},
  //   {id: 80, turma_id:2, name: "Matheus"},
  //   {id: 59, turma_id:2, name: "Pedro"},
  //   {id: 40, turma_id:2, name: "Adriana"},
  //   {id: 35, turma_id:2, name: "Bianca"},
  //   {id: 12, turma_id:2, name: "Vitor"},
  //   {id: 19, turma_id:2, name: "Rodrigo"}
  // ]



  constructor(private turmasService: TurmaService,
              private matriculaService: MatriculasService,
              private aulaService: AulasService,
              private presenceService: PresencasService
              ) {

    this.matriculas = [];
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

  markPresence(){
    if(!this.turma.first_attendance){
      this.matriculas.forEach(element => {
        var presence = 0;
        if(element.presence){
          presence = 1;
        }
        var new_presence = {aula: this.classes[this.turma.actual_class].id, 
          user: element.user.id, presences: presence, is_replacement: false, turma: this.turma.id};
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
