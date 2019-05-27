import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiclosService } from '../ciclos.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-ciclos-page',
  templateUrl: './ciclos-page.component.html',
  styleUrls: ['./ciclos-page.component.css']
})
export class CiclosPageComponent implements OnInit {

  private user: any;
  private ciclos: any;

  constructor(private router: Router, private ciclosService: CiclosService, private authenticationService: AuthenticationService) {
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role !== 'ADMIN') {
      this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

  ngOnInit() {
    this.ciclosService.getCiclos().subscribe(data => {
      this.ciclos = data;
    });
  }

  deleteCiclo(id: number) {
    this.ciclosService.deleteCiclo(id).subscribe(data => {
      // ciclo deleted
    });

    window.location.reload();
  }
}
