import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TurmasService } from '../turmas.service';
import { MatriculasService } from '../matriculas.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nova-matricula',
  templateUrl: './nova-matricula.component.html',
  styleUrls: ['./nova-matricula.component.css']
})
export class NovaMatriculaComponent implements OnInit {

  matriculaForm: FormGroup;
  user: any;
  turmas: any;
  submitted: any;


  constructor(private router: Router,
    private fb: FormBuilder,
    private turmaService: TurmasService,
    private matriculaService: MatriculasService,
    private authenticationService: AuthenticationService) {

    let user = this.authenticationService.currentUserValue;
    if (!user) {
      this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

  ngOnInit() {
    this.turmaService.getTurma().subscribe(data => {
      this.turmas = data;
    });

    this.matriculaForm = this.fb.group({
      approved: ['pending'],
      absences: [0],
      nota: [0],
      user: [this.user.id],
      turma: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.matriculaForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.matriculaForm.invalid) {
      return;
    }

    this.matriculaService.createMatricula(this.matriculaForm.getRawValue()).subscribe(data => {
      this.router.navigate(['/students'])
    });

  }

}
