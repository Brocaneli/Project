import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-turma-page',
  templateUrl: './nova-turma-page.component.html',
  styleUrls: ['./nova-turma-page.component.css']
  
})
export class NovaTurmaPageComponent implements OnInit {

  
  turmaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.turmaForm = this.fb.group({
      turma: ['', Validators.required]
  });
  }

  onSubmit(){
    console.log('turmaForm', this.turmaForm.value);
    
  }

}
