import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TurmaService } from '../turma.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turmaquery',
  templateUrl: './turmaquery.component.html',
  styleUrls: ['./turmaquery.component.css']
})
export class TurmaqueryComponent implements OnInit {

  @Input() cicloId: any;
  @Output() choosed = new EventEmitter<boolean>();
  turmas: any;

  constructor(private turmaService: TurmaService,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
    this.turmaService.getAllTurmaFromCiclo(this.cicloId).subscribe((data) => {
       this.turmas = data;
     });
  }

  chooseTurma(turmaId) {
    this.choosed.emit(turmaId);
  }

}
