import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { MatriculasService } from '../matriculas.service';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-aprovar-alunos',
  templateUrl: './aprovar-alunos.component.html',
  styleUrls: ['./aprovar-alunos.component.css']
})
export class AprovarAlunosComponent implements OnInit {

  private alunos: any
  private filtro: any;
  private turmas: any;
  private selectedTurma: any;
  private alert: any;

  constructor(private alunosService: MatriculasService, private turmaService: TurmaService) { }

  ngOnInit() {

    this.turmaService.getAllTurmas().subscribe(data => {
      this.turmas = data;
    })
  }

  approveAluno(aluno: any) {
    this.updateApprovedAluno(aluno, true, true, false);
    window.location.reload();
  }

  reproveAluno(aluno: any) {
    this.updateApprovedAluno(aluno, false, false, true);
    window.location.reload();
  }

  getAlunos(turmaID: any, selectedTurma: any) {
    this.alunosService.getIsGraduatedMatriculas(turmaID).subscribe(data => {
      this.alunos = data;
    })
    this.selectedTurma = selectedTurma;  
    
  }

  updateApprovedAluno(aluno: any, nota: boolean, graduated: boolean, new_ciclo: boolean) {
    let novoCorpo = {
      id: aluno.id,
      nota: nota ? aluno.nota : aluno.nota,
      approved: aluno.approved,
      absences: aluno.absences,
      user: aluno.user.id,
      turma: aluno.turma.id,
      graduated: graduated ? "isGraduated" : "isNotGraduated",
      new_ciclo: new_ciclo ? "Approved" : "needApprove",
    }

    this.alunosService.updateMatricula(novoCorpo).subscribe((data) => {
      window.location.reload();
    })
  }
}
