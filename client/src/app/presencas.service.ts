import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class PresencasService {

  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getAllPresences() {
    return this.httpClient.get(`${this.constService.API_URI}/presencas/`)
  }

  getPresence(presencaId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/presencas/${presencaId}/`)
  }

  createPresence(presenca: any) {
    return this.httpClient.post(`${this.constService.API_URI}/presencas/`, presenca)
  }

  updatePresence(presenca: any) {
    return this.httpClient.put(`${this.constService.API_URI}/presencas/${presenca.id}/`, presenca, this.postOptions)
  }

  deletePresence(presencaId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/presencas/${presencaId}/`)
  }

  getAllPresencesFromClass(classId: any){
    return this.httpClient.get(`${this.constService.API_URI}/presencas/?aula=${classId}`)
  }
}
