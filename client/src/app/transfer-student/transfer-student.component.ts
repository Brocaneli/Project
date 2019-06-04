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

  constructor(private matriculaService: MatriculasService, private turmaService: TurmaService, private cicloService: CiclosService) { }

  ngOnInit() {
    this.turmaService.getAllTurmas().subscribe(data => {
      this.turmas = data;
    })

    this.cicloService.getCiclos().subscribe(data => {
      this.ciclos = data;
    })
  }


  getNewTurma(selectedCiclo: any, turmaId: any) {
    this.turmaId = turmaId;
    this.newTurma = selectedCiclo;
  }

  getAlunos(turmaID: any, newTurma: any) {
    this.matriculaService.getAvailableForNewCiclo(turmaID).subscribe(data => {
      this.matriculas = data;
    })
    this.newTurma = newTurma;
  }

  approveAluno(matricula: any, turmaId: any) {
    let novoCorpo = {
      id: matricula.id,
      nota: matricula.nota,
      approved: matricula.approved,
      absences: matricula.absences,
      user: matricula.user.id,
      turma: matricula.turma.id,
      graduated: matricula.graduated,
      new_ciclo: "Approved",
    }

    let novaMatricula = {
      id: matricula.id,
      nota: matricula.nota,
      approved: "approved",
      absences: matricula.absences,
      user: matricula.user.id,
      turma: this.turmaId,
      graduated: "aguardando",
      new_ciclo: "Approved",
    }

    this.matriculaService.createMatricula(novaMatricula).subscribe((data) => {
    })
    this.matriculaService.updateMatricula(novoCorpo).subscribe((data) => {
    })

    window.location.reload();
  }




  updateAluno(matricula: any, cicloId: any) {
    
  }

}
