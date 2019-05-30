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
    // this.alunosService.getAllMatriculas().subscribe(data => {
    //   this.alunos = data;
    // })

    this.turmaService.getAllTurmas().subscribe(data => {
      this.turmas = data;
    })

    // this.filtro = this.alunos.filter(aluns => {
    //   aluns.nota === "0"
    // });
  }

  approveAluno(aluno: any) {
    this.updateApprovedAluno(aluno, true, true);
    window.location.reload();
  }

  reproveAluno(aluno: any) {
    this.updateApprovedAluno(aluno, false, false);
    window.location.reload();
  }

  getAlunos(turmaID: any, selectedTurma: any) {
    this.alunosService.getIsGraduatedMatriculas(turmaID).subscribe(data => {
      this.alunos = data;
    })
    this.selectedTurma = selectedTurma;  
    
  }

  updateApprovedAluno(aluno: any, nota: boolean, graduated: boolean) {
    let novoCorpo = {
      id: aluno.id,
      nota: nota ? aluno.nota : aluno.nota,
      approved: aluno.approved,
      absences: aluno.absences,
      user: aluno.user.id,
      turma: aluno.turma.id,
      graduated: graduated ? "isGraduated" : "isNotGraduated",
    }

    this.alunosService.updateMatricula(novoCorpo).subscribe((data) => {
      window.location.reload();
    })
  }
}
