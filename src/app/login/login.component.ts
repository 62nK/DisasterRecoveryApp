import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  componentTitle = "Disaster Recovery Application Project";
  formTitle = "Admin/User Log-In";

  constructor() { }

  ngOnInit() {
  }

}
