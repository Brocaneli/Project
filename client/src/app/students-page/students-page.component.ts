import { Component, OnInit, Input } from '@angular/core';
import { AvisoService } from '../aviso.service';
import { MatriculasService } from '../matriculas.service';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';



@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  private avisos: any;
  private matriculas: any;
  private matriculasPendentes: any;
  private user: any;

  constructor(
    private avisoService: AvisoService,
    private matriculasService: MatriculasService,
    private authenticationService: AuthenticationService,
<<<<<<< HEAD
    private router: Router,
    private _location: Location

=======
    private router: Router
>>>>>>> 2f092a41e1f32bb3385a35fd3a1cc18a3b50f87d
  ) {
    let user = this.authenticationService.currentUserValue;
    if (!user) {
      this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

  ngOnInit() {
    this.matriculasService.getAllApprovedMatriculasFromUser(this.user.id).subscribe(data => {
      this.matriculas = data;

      let turmaIds = this.matriculas.map((mat) => mat.turma.id)

      this.avisoService.getAvisos().subscribe(data => {
        let allAvisos: any = data;
        this.avisos = allAvisos.filter((aviso) => {
          return turmaIds.indexOf(aviso.turma.id) >= 0
        });
      });
    });

    this.matriculasService.getAllPendingMatriculasFromUser(this.user.id).subscribe(data => {
      this.matriculasPendentes = data;
    });
  }

  onClick_back() {
    this._location.back();
  }


}
