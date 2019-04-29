import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CicloService } from '../ciclo.service';

@Component({
  selector: 'app-novo-ciclo-page',
  templateUrl: './novo-ciclo-page.component.html',
  styleUrls: ['./novo-ciclo-page.component.css']

})
export class NovoCicloPageComponent implements OnInit {

  cicloForm: FormGroup;    
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private cicloService: CicloService) { }
  
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

    console.log(this.cicloForm.getRawValue());
    this.cicloService.createCiclo(this.cicloForm.getRawValue()).subscribe(data => {
      // ciclo created
    });

    this.router.navigate(['ciclos']);
  }
}
