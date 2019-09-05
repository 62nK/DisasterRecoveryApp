import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { Authentication } from '../shared/models/authentication';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _auth0: Authentication;
  componentTitle = "Disaster Recovery Application Project";
  formTitle = "Admin/User Log-In";
  errorMessage: string;
  public logInForm: FormGroup;

  constructor(private _userService: UserService, private router: Router) {
    this.logInForm = new FormGroup({
      username: new FormControl('', Validators.minLength(4)),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    if(localStorage.getItem("token")!=undefined)
      this.router.navigate(["/home/timecard/approval"]);
  }

  onSubmit() {
    this.validate(new User(this.logInForm.value.username, this.logInForm.value.password));
  }

  public validate(user: User): void{
    this._userService.signIn(user).subscribe(
      (authentication)=>{
        this.errorMessage="";
        localStorage.setItem("token", authentication.token);
        this.router.navigate(["/home/timecard/approval"]);
      },
      (httpErrorResponse)=>this.errorMessage = httpErrorResponse.error.message,
    );
  }
}
