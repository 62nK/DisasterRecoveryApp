import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  constructor(private router: Router) { }

  ngOnInit() {}

  ngDoCheck(){
    if(localStorage.getItem("auth0.token")==undefined)
      this.router.navigate(["/login"]);
  }

}
