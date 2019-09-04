import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  componentTitle = "Disaster Recovery Application Project";
  formTitle = "Admin/User Log-In";

  constructor(private _userService: UserService) { }

  ngOnInit() {
    let user: User = new User("admin", "1234");
    this._userService.signIn(user).subscribe(
      (authentication)=>console.log("token: "+authentication.token),
      (error)=>console.log(error),
    );
  }

}
