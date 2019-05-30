import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatriculasService } from '../matriculas.service';

@Component({
  selector: 'app-studentquery',
  templateUrl: './studentquery.component.html',
  styleUrls: ['./studentquery.component.css']
})
export class StudentqueryComponent implements OnInit {

  @Input() turmaId: any;
  @Output() choosed = new EventEmitter<boolean>();
  students: any;

  constructor(private activatedRoute: ActivatedRoute,
              private matriculaService: MatriculasService
            ) { }

  ngOnInit() {
      this.matriculaService.getAllApprovedMatriculasFromTurma(this.turmaId).subscribe((data) => {
        this.students = data;
      });
  }

  chooseStudent(studentId) {
    this.choosed.emit(studentId);
  }

}
