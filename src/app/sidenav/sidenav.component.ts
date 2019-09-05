import { Component, OnInit } from '@angular/core';
import { Authentication } from '../shared/models/authentication';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private auth0: Authentication;
  public superUserView: boolean;

  constructor(private _userService: UserService) { 
    this.auth0 = _userService.getAuthenticatedUser();
    this.superUserView = this.auth0.isAdmin();
  }

  ngOnInit() {
  }

}
