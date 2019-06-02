import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nosso-lar';

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout()
    this.router.navigate(['login'])
  }
}
