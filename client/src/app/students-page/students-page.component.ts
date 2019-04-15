import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  add_class(){
  }

  cursos = [
    {name : "Aula 1"},
    {name : "Aula 2"},
    {name : "Aula 3"},
    {name : "Aula 4"}
  ]

  avisos = [
    {name : "Aviso 1", date: "12/01/18", user: "julia", comment: "hello world!"},
    {name : "Aviso 2", date: "12/01/18", user: "julia", comment: "hello world!"},
    {name : "Aviso 3", date: "12/01/18", user: "julia", comment: "hello world!"},
    {name : "Aviso 4", date: "12/01/18", user: "julia", comment: "hello world!"},

  ]

  constructor() { }

  ngOnInit() {
  }

}
