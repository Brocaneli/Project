import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas = [{nome: "Ciclo 01", desc1: "01 - Radiações e Vibrações"},
{nome: "Ciclo 2"},
{nome: "Ciclo 3"},
{nome: "Assistência Espiritual"},
{nome: "Mocidade Espírita"}];

  constructor() { }

  ngOnInit() {
  }

}
