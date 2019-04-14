import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turmas-page',
  templateUrl: './turmas-page.component.html',
  styleUrls: ['./turmas-page.component.css']
})
export class TurmasPageComponent implements OnInit {

  turmas = [{name : "Turma 1", curso : "Ciclo Básico"}, 
  {name : "Turma 2", curso : "Ciclo 1"}, 
  {name : "Turma 3", curso : "Ciclo 2"}, 
  {name : "Turma 4", curso : "Ciclo 1"},]

  constructor() { }

  ngOnInit() {
  }

}
