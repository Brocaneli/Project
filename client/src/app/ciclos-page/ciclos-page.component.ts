import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CicloService } from '../ciclo.service';

@Component({
  selector: 'app-ciclos-page',
  templateUrl: './ciclos-page.component.html',
  styleUrls: ['./ciclos-page.component.css']
})
export class CiclosPageComponent implements OnInit {

  private ciclos: any;

  constructor(private router: Router, private cicloService: CicloService) { }

  ngOnInit() {
    this.cicloService.getCiclos().subscribe(data => {
      this.ciclos = data;
    });
  }

  deleteCiclo(id: number) {
    this.cicloService.deleteCiclo(id).subscribe(data => {
      // ciclo deleted
    });

    window.location.reload();
    //this.router.navigate(['ciclos']);
  }
}
