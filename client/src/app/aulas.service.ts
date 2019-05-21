import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getAllAulas() {
    return this.httpClient.get(`${this.constService.API_URI}/aulas/`)
  }

  getAula(aulaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/aulas/${aulaId}/`)
  }

  createAula(aula: any) {
    return this.httpClient.post(`${this.constService.API_URI}/aulas/`, aula)
  }

  updateAula(aula: any) {
    return this.httpClient.put(`${this.constService.API_URI}/aulas/${aula.id}`, aula, this.postOptions)
  }

  deleteAula(aulaId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/aulas/${aulaId}/`)
  }

  getAllAulasFromCiclo(cicloId: number) {
    return this.httpClient.get(`${this.constService.API_URI}/aulas/?ciclo=${cicloId}`)
  }
}
