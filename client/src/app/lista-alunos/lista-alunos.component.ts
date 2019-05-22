import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatriculasService } from '../matriculas.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-lista-alunos',
  providers: [SearchPipe] ,
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  private id: number
  private alunos: any
  private query: any

  constructor(private activatedRoute: ActivatedRoute, private matriculasService: MatriculasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.id = params['id'];
    })

    this.matriculasService.getAllApprovedMatriculasFromTurma(this.id).subscribe((data) => {
      this.alunos = data;
    });
  }
}
