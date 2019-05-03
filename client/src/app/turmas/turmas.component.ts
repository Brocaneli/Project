import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CiclosService } from '../ciclos.service'
import { TurmasService } from '../turmas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmaForm: FormGroup;
  private turmas: any;
  private ciclos: any;



  cursos = [{ nome: "Ciclo 01", desc1: "01 - Radiações e Vibrações" },
  { nome: "Ciclo 2" },
  { nome: "Ciclo 3" },
  { nome: "Assistência Espiritual" },
  { nome: "Mocidade Espírita" }];

  constructor(private router: Router, private cicloService: CiclosService, private fb: FormBuilder, private turmaService: TurmasService) { }

  ngOnInit() {

    this.cicloService.getCiclos().subscribe(data => {
      this.ciclos = data;
    });

    this.turmaService.getTurma().subscribe(data => {
      this.turmas = data;
    });

    this.turmaForm = this.fb.group({
      name: ['', Validators.required],
      ciclo_id: [''],
      start_date: [''],
      end_date: ['']
    });
    
    
  }

  onSubmit() {

    console.log(this.turmaForm.getRawValue());
    this.turmaService.createTurma(this.turmaForm.getRawValue()).subscribe(data => {
    });

    //window.location.reload();

  }

  deleteTurma(id: number) {
    this.turmaService.deleteTurma(id).subscribe(data => {
    });

    window.location.reload();
  }

}
