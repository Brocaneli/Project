import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisoService } from '../aviso.service';
import { AuthenticationService } from '../authentication.service';
import { TurmasService } from '../turmas.service';



@Component({
  selector: 'app-novo-aviso',
  templateUrl: './novo-aviso.component.html',
  styleUrls: ['./novo-aviso.component.css']
})
export class NovoAvisoComponent implements OnInit {
  avisoForm: FormGroup;
  loading = false;
  submitted = false;
  private user: any;
  private turmas: any;



  constructor(private fb: FormBuilder, 
    private router: Router, 
    private avisoService: AvisoService, 
    private authenticationService: AuthenticationService,
    private turmaService: TurmasService
  ) 

   {
    let user = this.authenticationService.currentUserValue;
    if (!user) { 
        //this.router.navigate(['login']);
    } else {
      this.user = user;
    }

   }

  ngOnInit() {
    this.avisoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      turma: ['', Validators.required],
      user: [this.user.id, Validators.required]

    });

    this.turmaService.getTurma().subscribe(data => {
      this.turmas = data;
      console.log(this.turmas);
    });
  }



  // convenience getter for easy access to form fields
  get f() { return this.avisoForm.controls }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.avisoForm.invalid) {
      return;
    }

    this.avisoService.createAviso(this.avisoForm.getRawValue()).subscribe(data => {
      this.router.navigate(['colaborators']);
    });



  }
}