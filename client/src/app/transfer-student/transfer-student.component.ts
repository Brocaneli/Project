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
  private selectedTurma: any;
  private selectedCiclo: any;
  private ciclos: any;
  private cicloId: any;

  constructor(private matriculaService: MatriculasService, private turmaService: TurmaService, private cicloService: CiclosService) { }

  ngOnInit() {
    this.turmaService.getAllTurmas().subscribe(data => {
      this.turmas = data;
    })

    this.cicloService.getCiclos().subscribe(data => {
      this.ciclos = data;
    })
  }


  getCiclos(selectedCiclo: any, cicloId: any) {
    this.cicloId = cicloId;
    this.selectedCiclo = selectedCiclo;
  }

  getAlunos(turmaID: any, selectedTurma: any) {
    this.matriculaService.getAvailableForNewCiclo(turmaID).subscribe(data => {
      this.matriculas = data;
    })
    this.selectedTurma = selectedTurma;
  }

  approveAluno(aluno: any, cicloId: any) {
    this.updateAluno(aluno, cicloId);
    window.location.reload();
  }




  updateAluno(matricula: any, cicloId: any) {
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
      approved: matricula.approved,
      absences: matricula.absences,
      user: matricula.user.id,
      turma: matricula.turma.id,
      graduated: "aguardando",
      new_ciclo: "Approved",
    }

    this.matriculaService.createMatricula(novaMatricula).subscribe((data) => {
    })
    this.matriculaService.updateMatricula(novoCorpo).subscribe((data) => {
    })
  }

}
