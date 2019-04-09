import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {


  people = [{name: "Marcus"},
             {name: "Julia"}, 
             {name: "Marilia"}, 
             {name: "Matheus"}, 
             {name: "Pedro"}]

  constructor() { }

  ngOnInit() {
  }

}
