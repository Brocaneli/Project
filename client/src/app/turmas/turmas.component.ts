import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [{nome: "Ciclo 01", desc1: "01 - Radiações e Vibrações"},
{nome: "Ciclo 2"},
{nome: "Ciclo 3"},
{nome: "Assistência Espiritual"},
{nome: "Mocidade Espírita"}];

  constructor() { }

  ngOnInit() {
  }

}
