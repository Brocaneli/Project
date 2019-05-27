import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CiclosService } from '../ciclos.service'
import { TurmasService } from '../turmas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { MatriculasService } from '../matriculas.service';
import { AuthenticationService } from '../authentication.service';

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
  loading = false;
  submitted = false;
  user: any;

  constructor(private router: Router,
     private cicloService: CiclosService,
    private fb: FormBuilder, 
    private turmaService: TurmasService, 
    private userService: UsersService, 
    private matriculaService: MatriculasService,
    private authenticationService: AuthenticationService) { 
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role !== 'ADMIN') { 
        this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

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
      ciclo: ['', Validators.required],
      start_date: ['2019-01-01T12:00', Validators.required],
      end_date: ['2019-01-01T12:00', Validators.required]
    });

    this.matriculaForm = this.fb.group({
      approved: [''],
      nota: [''],
      user: [''],
      turma: ['']
    });
  }

    // convenience getter for easy access to form fields
  get f() { return this.turmaForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.turmaForm.invalid) {
      console.log(this.turmaForm)
      return;
    }
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
