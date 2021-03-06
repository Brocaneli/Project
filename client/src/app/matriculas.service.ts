import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {
 
  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getAllMatriculas() {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/`)
  }

  getMatricula(matriculaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/${matriculaId}/`)
  }

  createMatricula(matricula: any) {
    return this.httpClient.post(`${this.constService.API_URI}/matriculas/`, matricula)
  }

  updateMatricula(matricula: any) {
    return this.httpClient.put(`${this.constService.API_URI}/matriculas/${matricula.id}/`, matricula, this.postOptions)
  }

  deleteMatricula(matriculaId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/matriculas/${matriculaId}/`)
  }

  getAllUnapprovedMatriculasFromUser(userId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=rejected&user=${userId}`)
  }

  getAllApprovedMatriculasFromUser(userId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=approved&user=${userId}`)
  }

  getAllPendingMatriculasFromUser(userId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=pending&user=${userId}`)
  }

  getAllMatriculasFromTurma(turmaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?turma=${turmaId}`)
  }

  getAllApprovedMatriculasFromTurma(turmaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=approved&turma=${turmaId}&graduated=aguardando`)
  }

  getAllPendingMatriculasFromTurma(turmaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=pending&turma=${turmaId}`)
  }

  getIsGraduatedMatriculas(turmaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?graduated=aguardando&turma=${turmaId}`)
  }

  getAvailableForNewCiclo(turmaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?turma=${turmaId}`)
  }

  getMatriculaBetweenUserAndTurma(turmaId: any, userId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?user=${userId}&turma=${turmaId}`)
  }
}
