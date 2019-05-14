import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CiclosService } from '../ciclos.service'
import { TurmasService } from '../turmas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { MatriculasService } from '../matriculas.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmaForm: FormGroup;
  matriculaForm: FormGroup;
  private turmas: any;
  private ciclos: any;
  private students: any;
  private matriculas: any;
  private alunos: any;
  private alunoMatricula: any;

  constructor(private router: Router, private cicloService: CiclosService, private fb: FormBuilder, private turmaService: TurmasService, private userService: UsersService, private matriculaService: MatriculasService) { }

  ngOnInit() {

    this.cicloService.getCiclos().subscribe(data => {
      this.ciclos = data;
    });

    this.turmaService.getTurma().subscribe(data => {
      this.turmas = data;
    });

    this.userService.getAllUsers().subscribe(data => {
      this.students = data;
    });

    this.matriculaService.getAllMatriculas().subscribe(data => {
      this.matriculas = data;
    });

    this.turmaForm = this.fb.group({
      name: ['', Validators.required],
      ciclo_id: [''],
      start_date: [''],
      end_date: ['']
    });

    this.matriculaForm = this.fb.group({
      approved: [''],
      nota: [''],
      user_id: [''],
      turma_id: ['']
    });
    console.log(this.matriculaForm.getRawValue());


  }

  onSubmit() {

    console.log(this.turmaForm.getRawValue());
    this.turmaService.createTurma(this.turmaForm.getRawValue()).subscribe(data => {
    });

    window.location.reload();

  }

  clickBota(turma) {
    console.log(turma)
    this.alunos = this.matriculas.filter(matricula => 
      turma === matricula.turma_id
    );

    console.log(this.alunos);


  }

  aproveMatricula(id: number) {
    console.log(this.matriculaForm.getRawValue());
    
    this.matriculaService.updateMatricula(id).subscribe(data => {
      this.matriculas = data;
    });

  }

  pegarMatricula(id: number) {
    console.log(this.matriculaForm.getRawValue());
    this.matriculaService.getMatricula(id).subscribe(data => {
    });
    this.alunoMatricula = this.matriculas.map(a => {
      this.matriculaForm == this.alunoMatricula.getMatricula(id);
    });

  }

  deleteTurma(id: number) {
    this.turmaService.deleteTurma(id).subscribe(data => {
    });

    window.location.reload();
  }

}
