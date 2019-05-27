import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  private user: any

  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role !== 'ADMIN') { 
        this.router.navigate(['login']);
    } else {
      this.user= user;
    }
  }

  ngOnInit() {
  }

  

}
