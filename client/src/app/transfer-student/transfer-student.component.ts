import { Component, OnInit } from '@angular/core';
import { MatriculasService } from '../matriculas.service';
import { TurmaService } from '../turma.service';
import { CiclosService } from '../ciclos.service';

@Component({
  selector: 'app-transfer-student',
  templateUrl: './transfer-student.component.html',
  styleUrls: ['./transfer-student.component.css']
})
export class TransferStudentComponent implements OnInit {

  private matriculas: any;
  private turmas: any;
  private oldTurma: any;
  private newTurma: any;
  private ciclos: any;
  private turmaId: any;
  private novoCorpo = {}
  private novaMatricula = {}
  private matriculaFilter: any;

  constructor(private matriculaService: MatriculasService, private turmaService: TurmaService, private cicloService: CiclosService) { }

  ngOnInit() {
    this.turmaService.getAllTurmas().subscribe(data => {
      this.turmas = data;
    })

    this.cicloService.getCiclos().subscribe(data => {
      this.ciclos = data;
    })
  }


  getNewTurma(newTurma: any, turmaId: any) {
    this.turmaId = turmaId;
    this.newTurma = newTurma;
  }

  getAlunos(turmaID: any, oldTurma: any) {
    this.matriculaService.getAvailableForNewCiclo(turmaID).subscribe(data => {
      this.matriculas = data;
      console.log(data)
      this.matriculaFilter = this.matriculas.filter(c => {
        return c.nota > 0 && c.absences <= 5 && c.graduated == "aguardando"
      })
      console.log(this.matriculaFilter)
    })
    this.oldTurma = oldTurma;


  }

  approveAluno() {
    this.approveAll();
    window.location.reload();
  }

  approveAll() {
    for (let matricula of this.matriculas) {
      if (matricula.nota > 0 && matricula.absences <=5) {
        this.novoCorpo = {
          id: matricula.id,
          nota: matricula.nota,
          approved: matricula.approved,
          absences: matricula.absences,
          user: matricula.user.id,
          turma: matricula.turma.id,
          graduated: "isGraduated",
        }
  
        this.novaMatricula = {
          id: matricula.id,
          nota: 0,
          approved: "approved",
          absences: 0,
          user: matricula.user.id,
          turma: this.turmaId,
          graduated: "aguardando",
        }
  
        this.matriculaService.createMatricula(this.novaMatricula).subscribe((data) => {
        })
        this.matriculaService.updateMatricula(this.novoCorpo).subscribe((data) => {
        })
      }
    }
    window.location.reload();
  }

}
