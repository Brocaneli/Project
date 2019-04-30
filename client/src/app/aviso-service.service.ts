import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class AvisoServiceService {
  
  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getAvisos() {
    return this.httpClient.get(`${this.constService.API_URI}/avisos/`)
  }

  createAviso(aviso: any) {
    return this.httpClient.post(`${this.constService.API_URI}/avisos/`, aviso)
  }

  updateAviso(aviso: any) {
    return this.httpClient.put(`${this.constService.API_URI}/avisos/${aviso.id}`, aviso, this.postOptions)
  }

  deleteAviso(id: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/avisos/${id}/`)
  }
}
