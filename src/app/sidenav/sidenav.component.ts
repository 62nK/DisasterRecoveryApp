import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { User, ADMIN } from '../shared/models/user'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public superUserView: boolean = true;

  constructor(private _authenticationService: AuthenticationService) { 
    this.superUserView = this._authenticationService.getAuthenticatedUser().role===ADMIN;
  }

  ngOnInit() {
    this.superUserView = this._authenticationService.getAuthenticatedUser().role===ADMIN;
  }

}
