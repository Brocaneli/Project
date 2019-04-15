import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-turma-page',
  templateUrl: './nova-turma-page.component.html',
  styleUrls: ['./nova-turma-page.component.css']

})
export class NovaTurmaPageComponent implements OnInit {

  turmaForm: FormGroup;    
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.turmaForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.turmaForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.turmaForm.invalid) {
      return;
    }

    this.router.navigate(['turmas']);
  }

}
