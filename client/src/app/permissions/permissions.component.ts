import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit, OnChanges {

  private users: any;
  private query: any;
  private user: any;

  constructor(private usersService: UsersService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role !== 'ADMIN') {
      this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.users.sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        }
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    });
}

ngOnChanges() {

}

}
