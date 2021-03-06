import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private postOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private constService: ConstService) { }

  getAllUsers() {
    return this.httpClient.get(`${this.constService.API_URI}/users/`)
  }

  getUser(userId: any) {
    return this.httpClient.get(`${this.constService.API_URI}/users/${userId}/`)
  }

  createUser(user: any) {
    return this.httpClient.post(`${this.constService.API_URI}/users/`, user)
  }

  updateUser(user: any) {
    return this.httpClient.put(`${this.constService.API_URI}/users/${user.id}/`, user, this.postOptions)
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`${this.constService.API_URI}/users/${userId}/`)
  }
}
