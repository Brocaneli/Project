import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculasService } from '../matriculas.service';
import { SearchPipe } from '../search.pipe';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-lista-alunos',
  providers: [SearchPipe],
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  private id: number
  private alunos: any
  private query: any
  private user: any

  constructor(private activatedRoute: ActivatedRoute, 
    private matriculasService: MatriculasService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    let user = this.authenticationService.currentUserValue;
    if (!user || user.role === 'ALUNO') {
      this.router.navigate(['login']);
    } else {
      this.user = user;
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    this.matriculasService.getAllApprovedMatriculasFromTurma(this.id).subscribe((data) => {
      this.alunos = data;
      this.alunos.sort((a, b) => {
        if (a.user.name.toUpperCase() > b.user.name.toUpperCase()) {
          return 1;
        }
        if (a.user.name.toUpperCase() < b.user.name.toUpperCase()) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    });
  }
}
