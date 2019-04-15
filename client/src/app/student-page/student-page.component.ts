import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  add_class(){
  }

  cursos = [
    {name : "Aula 1"},
    {name : "Aula 2"},
    {name : "Aula 3"},
    {name : "Aula 4"}
  ]

  avisos = [
    {name : "Aviso 1"},
    {name : "Aviso 2"},
    {name : "Aviso 3"},
    {name : "Aviso 4"}
  ]

  constructor() { }

  ngOnInit() {
  }

}