import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-colaborator-page',
  templateUrl: './colaborator-page.component.html',
  styleUrls: ['./colaborator-page.component.css']
})
export class ColaboratorPageComponent implements OnInit {
  panelOpenState = false;
  
  cursos =[
    {name : "Aula 1"},
    {name : "Aula 1"},
    {name : "Aula 1"},
  ];

  avisos =[
    {name : "Aviso 1"},
    {name : "Aviso 2"},
    {name : "Aviso 3"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
