import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit, OnChanges {

  people = [{id:1, name: "Marcus"},
             {id:2, name: "Julia"}, 
             {id:3, name: "Marilia"}, 
             {id:4, name: "Matheus"}, 
             {id:5, name: "Pedro"}]


  constructor() { }

  ngOnInit() {
    this.people.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

  ngOnChanges() {

  }

}
