import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle: string;
  authenticatedUser: string;

  constructor(private _authenticationService: AuthenticationService, private _userService: UserService, private _router: Router) { 
    this.authenticatedUser = _authenticationService.getAuthenticatedUser().username;
    this.appTitle = "Disaster Recovery Application: Timecard Submission";
    localStorage.getItem("auth0.token");
  }

  ngOnInit() {
  }

  public signOut(){
    this._userService.signOut();
    this._router.navigate(['/login']);
  }
}
