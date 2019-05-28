import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CiclosService } from '../ciclos.service';

@Component({
  selector: 'app-cicloquery',
  templateUrl: './cicloquery.component.html',
  styleUrls: ['./cicloquery.component.css']
})
export class CicloqueryComponent implements OnInit {

  @Output() choosed = new EventEmitter<boolean>();
  ciclos: any

  constructor(private cicloService: CiclosService) { }

  ngOnInit() {
    this.cicloService.getCiclos().subscribe((data) => {
      this.ciclos = data;
    });
  }

  chooseCiclo(cicloId) {
    this.choosed.emit(cicloId);
  }

}
