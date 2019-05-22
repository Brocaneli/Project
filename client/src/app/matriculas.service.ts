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
    return this.httpClient.put(`${this.constService.API_URI}/matriculas/${matricula.id}`, matricula, this.postOptions)
  }

  deleteMatricula(matriculaId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/matriculas/${matriculaId}/`)
  }

  getAllUnapprovedMatriculasFromUser(userId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=false&user=${userId}`)
  }

  getAllApprovedMatriculasFromUser(userId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=true&user=${userId}`)
  }

  getAllMatriculasFromTurma(turmaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?turma=${turmaId}`)
  }

  getAllApprovedMatriculasFromTurma(turmaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/matriculas/?approved=true&turma=${turmaId}`)
  }
}
