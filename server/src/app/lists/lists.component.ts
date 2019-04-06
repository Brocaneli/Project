import { Component, OnInit } from '@angular/core';
import { ListApiService } from '../list-api.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  public lists = [];

  constructor(private listApiService: ListApiService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(){
    this.listApiService.getLists().subscribe((data: Array<Object>) => {
      this.lists = data;
      console.log(data);
    });
  }

}
