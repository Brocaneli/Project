import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstService {

  API_URI = 'api';

  returnUrl = {
    "ADMIN": "admin",
    "COLAB": "colaborators",
    "ALUNO": "students"
  };

  constructor() { }
}
