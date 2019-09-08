import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MachineCodeService } from '../shared/services/machine-code.service';
import { MachineCode } from '../shared/models/machinecode';
import { Router } from '@angular/router';


@Component({
  selector: 'app-machine-code-submission',
  templateUrl: './machine-code-submission.component.html',
  styleUrls: ['./machine-code-submission.component.css']
})
export class MachineCodeSubmissionComponent implements OnInit {

  componentTitle: string;
  machineCodeSubmissionForm: FormGroup;
  message: string;

  constructor(private _machineCodeService: MachineCodeService, private router: Router) {
    this.componentTitle = "Machine Code Submission";
    this.machineCodeSubmissionForm =new FormGroup({
      code: new FormControl("", Validators.required),
      description: new FormControl(),
      hourlyRent: new FormControl("", Validators.required),
      maxDailyHours: new FormControl("", Validators.required)
    });
   }

   onSubmit(){
     let machineCode = new MachineCode(
       this.machineCodeSubmissionForm.value.code,
       this.machineCodeSubmissionForm.value.description,
       this.machineCodeSubmissionForm.value.hourlyRent,
       this.machineCodeSubmissionForm.value.maxDailyHours
     );
     this._machineCodeService.createMachineCode(machineCode).subscribe(
       (response)=>{
         this.router.navigate(["home/machinecode/management"]);
       },
       (error)=>console.log(error)
     );
   }
  ngOnInit() {
  }

}
