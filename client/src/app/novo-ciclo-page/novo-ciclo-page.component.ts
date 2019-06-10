import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiclosService } from '../ciclos.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-novo-ciclo-page',
  templateUrl: './novo-ciclo-page.component.html',
  styleUrls: ['./novo-ciclo-page.component.css']

})
export class NovoCicloPageComponent implements OnInit {

  cicloForm: FormGroup;
  loading = false;
  submitted = false;
  private user: any;

  constructor(private fb: FormBuilder, private router: Router, private ciclosService: CiclosService,
    private authenticationService: AuthenticationService) { 
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role !== 'ADMIN') { 
        this.router.navigate(['login']);
    } else {
      this.user= user;
    }
  }

  ngOnInit() {
    this.cicloForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.cicloForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.cicloForm.invalid) {
      return;
    }

    this.ciclosService.createCiclo(this.cicloForm.getRawValue()).subscribe(data => {
      this.router.navigate(['cursos']);
    });
  }
}