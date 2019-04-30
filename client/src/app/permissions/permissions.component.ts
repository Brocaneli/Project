import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit, OnChanges {

  private users: any;


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.users.sort((a, b) => (a.name > b.name) ? 1 : -1);
    });
  }

  ngOnChanges() {

  }

}
