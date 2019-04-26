import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  private avisos = [
    { name: "Aviso 1", date: "12/01/18", user: "julia", comment: "hello world!" },
    { name: "Aviso 2", date: "12/01/18", user: "julia", comment: "hello world!" },
    { name: "Aviso 3", date: "12/01/18", user: "julia", comment: "hello world!" },
    { name: "Aviso 4", date: "12/01/18", user: "julia", comment: "hello world!" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
