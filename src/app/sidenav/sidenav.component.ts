import { Component, OnInit } from '@angular/core';
import { Authentication } from '../shared/models/authentication';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public superUserView: boolean;

  constructor() { 
  }

  ngOnInit() {
  }

}
