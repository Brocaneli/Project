import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CiclosService } from '../ciclos.service';

@Component({
  selector: 'app-ciclos-page',
  templateUrl: './ciclos-page.component.html',
  styleUrls: ['./ciclos-page.component.css']
})
export class CiclosPageComponent implements OnInit {

  private ciclos: any;

  constructor(private router: Router, private ciclosService: CiclosService) { }

  ngOnInit() {
    this.ciclosService.getCiclos().subscribe(data => {
      this.ciclos = data;
    });
  }

  deleteCiclo(id: number) {
    this.ciclosService.deleteCiclo(id).subscribe(data => {
      // ciclo deleted
    });

    window.location.reload();
    //this.router.navigate(['ciclos']);
  }
}
