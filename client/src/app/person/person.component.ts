import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() firstName: string
  @Input() lastName: string
  absences=0

  absences_up(){
    this.absences+=1
  }

  absences_down(){
    this.absences-=1
    if(this.absences < 0){
      this.absences = 0
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
