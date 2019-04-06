import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  API_URL = 'api';

  constructor(private httpClient: HttpClient) { }

  getLists(){
    return this.httpClient.get(`${this.API_URL}/lists`)
  }
}
