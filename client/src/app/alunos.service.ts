import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getAllAlunos() {
    return this.httpClient.get(`${this.constService.API_URI}/alunos/`)
  }

  getAluno(alunoId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/alunos/${alunoId}/`)
  }

  createAluno(aluno: any) {
    return this.httpClient.post(`${this.constService.API_URI}/alunos/`, aluno)
  }

  updateAluno(aluno: any) {
    return this.httpClient.put(`${this.constService.API_URI}/alunos/${aluno.id}`, aluno, this.postOptions)
  }

  deleteAluno(alunoId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/alunos/${alunoId}/`)
  }
}
