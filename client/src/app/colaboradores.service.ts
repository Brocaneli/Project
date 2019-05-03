import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getAllColaboradores() {
    return this.httpClient.get(`${this.constService.API_URI}/colaboradores/`)
  }

  getColaborador(colaboradorId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/colaboradores/${colaboradorId}/`)
  }

  createColaborador(colaborador: any) {
    return this.httpClient.post(`${this.constService.API_URI}/colaboradores/`, colaborador)
  }

  updateColaborador(colaborador: any) {
    return this.httpClient.put(`${this.constService.API_URI}/colaboradores/${colaborador.id}`, colaborador, this.postOptions)
  }

  deleteColaborador(colaboradorId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/colaboradores/${colaboradorId}/`)
  }
}
