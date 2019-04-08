import { Component, OnInit } from '@angular/core';
import { ListDetailsApiService } from '../list-details-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  cards = [];

  constructor(private listDetailService: ListDetailsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    this.getCards(id);
  }

  getCards(id: number){
    this.listDetailService.getListDetail(id).subscribe((data: Array<Object>) => {
      this.cards = data;
      console.log(data);
    });
  }

}
