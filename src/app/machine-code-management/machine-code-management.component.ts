import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-code-management',
  templateUrl: './machine-code-management.component.html',
  styleUrls: ['./machine-code-management.component.css']
})
export class MachineCodeManagementComponent implements OnInit {

  componentTitle: string;

  constructor() { 
    this.componentTitle = "Machine Code Management";
  }

  ngOnInit() {
  }

}
