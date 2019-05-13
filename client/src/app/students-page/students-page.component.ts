import { Component, OnInit, Input } from '@angular/core';
import { AvisoService } from '../aviso.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  private avisos: any;

  constructor(private avisoService: AvisoService) { }

  ngOnInit() {
    this.avisoService.getAvisos().subscribe(data => {
      this.avisos = data;
    });
  }

}
