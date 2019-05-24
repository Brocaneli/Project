import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { ColaboradoresService } from '../colaboradores.service';
import { MatriculasService } from '../matriculas.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TurmasService } from '../turmas.service';

@Component({
  selector: 'app-permissions-detail',
  templateUrl: './permissions-detail.component.html',
  styleUrls: ['./permissions-detail.component.css']
})
export class PermissionsDetailComponent implements OnInit {

  private id: any;
  private user: any;
  private classes: any;
  private colaborators: any;
  private registrations: any;
  colaboradorToTurmaForm: FormGroup;
  private possibleTurmas: any;
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private colaboradorService: ColaboradoresService,
    private matriculasService: MatriculasService,
    private turmasService: TurmasService,
    private fb: FormBuilder
  ) {
    this.classes = [];
    this.colaborators = [];
    this.registrations = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    this.usersService.getUser(this.id).subscribe((data) => {
      this.user = data;
    });

    this.matriculasService.getAllApprovedMatriculasFromUser(this.id).subscribe((data) => {
      this.classes = data;
    });

    this.colaboradorService.getAllClassFromCollaborator(this.id).subscribe((data) => {
      this.colaborators = data;
      let turmaIds = this.colaborators.map((colaborator) => {
        return colaborator.turma.id
      })


      this.turmasService.getTurma().subscribe(data => {
        let allTurmas: any = data;
        this.possibleTurmas = allTurmas.filter((turma) => {
          return turmaIds.indexOf(turma.id) < 0
        })
      });
    });

    this.matriculasService.getAllUnapprovedMatriculasFromUser(this.id).subscribe((data) => {
      this.registrations = data;
    });

    this.colaboradorToTurmaForm = this.fb.group({
      turma: ['', Validators.required]
    });
  }

  updateUser() {
    var e = (document.getElementById("select")) as HTMLSelectElement;;
    var role = e.options[e.selectedIndex].text;
    switch (role) {
      case "Administrador": {
        this.user.role = "ADMIN";
        break;
      }
      case "Colaborador": {
        this.user.role = "COLAB";
        break;
      }
      case "Aluno": {
        this.user.role = "ALUNO";
        break;
      }
    }
    this.usersService.updateUser(this.user).subscribe(() => {
      console.log("Updated successfully")
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.colaboradorToTurmaForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.colaboradorToTurmaForm.invalid) {
      return;
    }

    let colaboradorBody = this.colaboradorToTurmaForm.getRawValue();
    colaboradorBody.user = this.id;

    this.colaboradorService.createColaborador(colaboradorBody).subscribe(data => {
      window.location.reload();
    });
  }

  deleteColaborador(colaboradorId) {
    this.colaboradorService.deleteColaborador(colaboradorId).subscribe((data) => {
      window.location.reload();
    });
  }

}
