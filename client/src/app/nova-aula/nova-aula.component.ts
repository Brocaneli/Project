import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AulasService } from '../aulas.service';
import { CiclosService } from '../ciclos.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nova-aula',
  templateUrl: './nova-aula.component.html',
  styleUrls: ['./nova-aula.component.css']

})
export class NovaAulaComponent implements OnInit {

  aulaForm: FormGroup;
  loading = false;
  submitted = false;
  private user: any;
  private ciclo : any;


  constructor(private fb: FormBuilder, private router: Router, private AulasService: AulasService,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService, private CiclosService: CiclosService) { 
    let user = this.authenticationService.currentUserValue;
    if (false) { 
        this.router.navigate(['login']);
    } else {
      this.user= user;
    }
  }

  ngOnInit() {
    
    this.aulaForm = this.fb.group({
      ciclo: ['', Validators.required],
      name: ['', Validators.required]
      // ,
      // date: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(data => {
      this.CiclosService.getCiclo(data['id']).subscribe(data2=>{
        this.ciclo = data2;
      });
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.aulaForm.controls; }

  onSubmit() {
    console.log;
    this.submitted = true;

    // stop here if form is invalid
    if (this.aulaForm.invalid) {
      return;
    }
    
    this.AulasService.createAula(this.aulaForm.getRawValue()).subscribe(data => {
      this.router.navigate([`aula/${this.ciclo.id}`]);
    });
  }
}