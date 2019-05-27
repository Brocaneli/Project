import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getTurma() {
    return this.httpClient.get(`${this.constService.API_URI}/turmas/`)
  }

  createTurma(turma: any) {
    return this.httpClient.post(`${this.constService.API_URI}/turmas/`, turma)
  }

  updateTurma(turma: any) {
    return this.httpClient.put(`${this.constService.API_URI}/turmas/${turma.id}`, turma, this.postOptions)
  }

  deleteTurma(turmaId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/turmas/${turmaId}/`)
  }
}
