import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getCiclos() {
    return this.httpClient.get(`${this.constService.API_URI}/ciclos/`)
  }

  createCiclo(ciclo: any) {
    return this.httpClient.post(`${this.constService.API_URI}/ciclos/`, ciclo)
  }

  updateCiclo(ciclo: any) {
    return this.httpClient.put(`${this.constService.API_URI}/ciclos/${ciclo.id}`, ciclo, this.postOptions)
  }

  deleteCiclo(cicloId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/ciclos/${cicloId}/`)
  }
}