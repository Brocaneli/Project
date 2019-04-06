import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListDetailsApiService {

  API_URL = 'api';

  constructor(private httpClient: HttpClient) { }

  getListDetail(id:number){
    return this.httpClient.get(`${this.API_URL}/list-detail?=list=`+id);
  }
}
