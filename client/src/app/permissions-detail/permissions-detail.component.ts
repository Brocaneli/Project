import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-permissions-detail',
  templateUrl: './permissions-detail.component.html',
  styleUrls: ['./permissions-detail.component.css']
})
export class PermissionsDetailComponent implements OnInit {

  id: any;
  user: any;

  constructor(private _Activatedroute:ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this._Activatedroute.params.subscribe(params => { this.id = params['id']; })
    this.usersService.getUser(this.id).subscribe((data) => {
      this.user = data;
      console.log(this.user)
    });
  }

}
