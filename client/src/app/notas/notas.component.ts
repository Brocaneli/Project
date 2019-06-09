import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { MatriculasService } from '../matriculas.service';
import { AulasService } from '../aulas.service';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

    // query itens
    cicloQuery: any
    turmaQuery: any
    queryAllowed = false
    turma_id = 1;
    turma: any;
    matriculas: any;
    private user: any
    nota: any;
    notaForm: FormGroup;
    loading = false;
    submitted = false;
    private ciclo : any;
  

  constructor(private turmasService: TurmaService,
    private matriculaService: MatriculasService,
    private aulaService: AulasService,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 

      this.matriculas = [];
      let user = this.authenticationService.currentUserValue;
      if (!user || user.role === 'ALUNO') {
        this.router.navigate(['login']);
      } else {
        this.user = user;
      }

    }

  ngOnInit() {

    this.notaForm = this.fb.group({
      turma: ['', Validators.required],
      name: ['', Validators.required]
      // ,
      // date: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(data => {
      this.turmasService.getTurma(this.turma_id).subscribe((data) => {
        this.turma = data;
      });
    });
  
  }
 
  allowQuery() {
    this.queryAllowed = !this.queryAllowed
    this.cicloQuery = null;
    this.turmaQuery = null;
  }

  cicloChose(cicloId: any) {
    this.cicloQuery = cicloId;
  }

  turmaChose(turmaId: any) {
    this.turmaQuery = turmaId;
  }

  studentsChose(matriculaId: any) {
    var new_matricula;
    this.matriculaService.getMatricula(matriculaId).subscribe((data) => {
      new_matricula = data;
      new_matricula['nota'] = false
      this.matriculas.push(new_matricula)
      this.allowQuery();
    });
  }

  


  get f() { return this.notaForm.controls; }


  onSubmit() {
    console.log;
    this.submitted = true;

    // stop here if form is invalid
    if (this.notaForm.invalid) {
      return;
    }
    
    this.matriculaService.getAllMatriculasFromTurma(this.notaForm.getRawValue()).subscribe(data => {
      this.router.navigate([`nota/${this.turma.id}`]);
    });
  }


}



