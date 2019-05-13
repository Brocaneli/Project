import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  class = {id:1, turma_id:2, date: new Date()}

  students = [
    {id: 3, turma_id:2, name: "João"}, 
    {id: 6, turma_id:2, name: "Julia"}, 
    {id: 5, turma_id:2, name: "Marcus"},
    {id: 10, turma_id:2, name: "Marília"},
    {id: 80, turma_id:2, name: "Matheus"},
    {id: 59, turma_id:2, name: "Pedro"},
    {id: 40, turma_id:2, name: "Adriana"},
    {id: 35, turma_id:2, name: "Bianca"},
    {id: 12, turma_id:2, name: "Vitor"},
    {id: 19, turma_id:2, name: "Rodrigo"}
  ]

  constructor() { }

  ngOnInit() {
    this.students.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

}
