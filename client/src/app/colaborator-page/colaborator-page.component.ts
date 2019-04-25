import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborator-page',
  templateUrl: './colaborator-page.component.html',
  styleUrls: ['./colaborator-page.component.css']
})
export class ColaboratorPageComponent implements OnInit {
  panelOpenState = false;
  
  cursos =[
    {name : "Ciclo 1 - T1", date: "Segunda  20:00 - 22:30", nextClass: "Domingo 28/04/2019"},
    {name : "Ciclo 2 - T2", date: "Terça 20:00 - 22:30", nextClass: "Segunda 29/04/2019"},
    {name : "Ciclo 3 - T3", date: "Quarta 09:00 - 11:30", nextClass: "Quarta 01/05/2019"},
  ];

  avisos =[
    {title : "Ciclo 1 - T1 - Alteração de Sala", 
     description :  "A próxima aula será na sala 22",
     author: "Alessandra"
    },

    {title : "Ciclo 2 - T2 - Alteração de Hotário", 
    description :  "A próxima aula começará 30min mais tarde",
    author: "Ivan"
    },

  ];

  


  constructor() { }

  ngOnInit() {
  }

}
