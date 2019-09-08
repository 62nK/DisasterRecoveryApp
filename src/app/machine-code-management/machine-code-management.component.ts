import { Component, OnInit, DoCheck } from '@angular/core';
import { MachineCodeService } from '../shared/services/machine-code.service';
import { MachineCode } from '../shared/models/machinecode';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-machine-code-management',
  templateUrl: './machine-code-management.component.html',
  styleUrls: ['./machine-code-management.component.css']
})
export class MachineCodeManagementComponent implements OnInit, DoCheck {

  componentTitle: string;
  machineCodeList: Array<MachineCode>;
  errorMessage: string;

  constructor(private _machineCodeService: MachineCodeService, private _router: Router) { 
    this.componentTitle = "Machine Code Management";
  }

  ngOnInit() {
    this.getMachineCodeList();
  }

  addNewMachineCode(){
    this._router.navigate(["home/machinecode/submission"]);
  }
  updateMachineCode(machineCode: MachineCode){
    this._router.navigate(["home/machinecode/submission", machineCode._id]);
  }
  removeMachineCode(machineCode: MachineCode){
    this._machineCodeService.removeMachineCode(machineCode).subscribe(
      (response)=>{
        console.log(response);
        this.getMachineCodeList();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  getMachineCodeList(){
    this._machineCodeService.getMachineCodeList().subscribe(
      (machineCodeList)=>{
        this.machineCodeList = machineCodeList;
      },
      (error)=>this.errorMessage = error
    );
  }

  ngDoCheck(): void {

  }

}
