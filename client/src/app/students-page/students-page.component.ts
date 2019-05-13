import { Component, OnInit, Input } from '@angular/core';
import { AvisoService } from '../aviso.service';
import { MatriculasService } from '../matriculas.service';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  private avisos: any;
  private matriculas: any;
  private user : any;

  constructor(
    private avisoService: AvisoService, 
    private matriculasService: MatriculasService,
    private authenticationService: AuthenticationService,
    private router: Router,

  ) {
    let user = this.authenticationService.currentUserValue;
    if (!user) { 
        //this.router.navigate(['login']);
    } else {
      this.user= user;
    }
   }


  ngOnInit() {
    this.avisoService.getAvisos().subscribe(data => {
      this.avisos = data;
    });
    this.matriculasService.getAllApprovedMatriculasFromUser(this.user.id).subscribe(data => {
      this.matriculas = data;
    });
  }

}
