import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle: string;
  authenticatedUser: string;

  constructor(private _userService: UserService, private _router: Router) { 
    this.authenticatedUser = "username(ADMIN)";
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
