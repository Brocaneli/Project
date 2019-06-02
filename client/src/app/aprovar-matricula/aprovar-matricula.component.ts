import { Component, OnInit } from '@angular/core';
import { MatriculasService } from '../matriculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-aprovar-matricula',
  templateUrl: './aprovar-matricula.component.html',
  styleUrls: ['./aprovar-matricula.component.css']
})
export class AprovarMatriculaComponent implements OnInit {

  private id: any;
  private matriculas: any;
  private user: any;

  constructor(private activatedRoute: ActivatedRoute, private matriculasService: MatriculasService,
    private authenticationService: AuthenticationService, private router: Router) { 
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role !== 'ADMIN') { 
        this.router.navigate(['login']);
    } else {
      this.user= user;
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.id = params['id'];
    })

    this.matriculasService.getAllPendingMatriculasFromTurma(this.id).subscribe((data) => {
      this.matriculas = data;
    });
  }

  approveMatricula(matricula: any) {
    this.updateApprovedMatricula(matricula, true)
  }

  rejectMatricula(matricula: any) {
    this.updateApprovedMatricula(matricula, false)
  }

  updateApprovedMatricula(matricula: any, approved: boolean) {
    let updateBody = {
      id: matricula.id,
      nota: matricula.nota,
      approved: approved ? "approved" : "rejected",
      absences: matricula.absences,
      user: matricula.user.id,
      turma: matricula.turma.id
    }

    this.matriculasService.updateMatricula(updateBody).subscribe((data) => {
      window.location.reload()
    })
  }

}
