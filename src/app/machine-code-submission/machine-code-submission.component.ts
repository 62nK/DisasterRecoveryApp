import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MachineCodeService } from '../shared/services/machine-code.service';
import { MachineCode } from '../shared/models/machinecode';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-machine-code-submission',
  templateUrl: './machine-code-submission.component.html',
  styleUrls: ['./machine-code-submission.component.css']
})
export class MachineCodeSubmissionComponent implements OnInit {

  componentTitle: string;
  machineCodeSubmissionForm: FormGroup;
  message: string;
  machineCodeToUpdate: MachineCode;
  update: boolean;

  constructor(private _machineCodeService: MachineCodeService, private _router: Router, private _route: ActivatedRoute) {
    this.componentTitle = "Machine Code Submission";
    this.machineCodeSubmissionForm =new FormGroup({
      code: new FormControl("", Validators.required),
      description: new FormControl(),
      hourlyRent: new FormControl("", Validators.required),
      maxDailyHours: new FormControl("", Validators.required)
    });
   }

   onSubmit(){
     if(this.update){
      this.machineCodeToUpdate.code = this.machineCodeSubmissionForm.value.code,
      this.machineCodeToUpdate.description = this.machineCodeSubmissionForm.value.description,
      this.machineCodeToUpdate.hourlyRent = this.machineCodeSubmissionForm.value.hourlyRate,
      this.machineCodeToUpdate.maxDailyHours = this.machineCodeSubmissionForm.value.maxDailyHours
      this._machineCodeService.updateMachineCode(this.machineCodeToUpdate).subscribe(
        (response)=>{
          this._router.navigate(["home/machinecode/management"]);
        },
        (error)=>console.log(error)
      );
    }
    else{
      let machineCode = new MachineCode(
        this.machineCodeSubmissionForm.value.code,
        this.machineCodeSubmissionForm.value.description,
        this.machineCodeSubmissionForm.value.hourlyRent,
        this.machineCodeSubmissionForm.value.maxDailyHours
      );
      this._machineCodeService.createMachineCode(machineCode).subscribe(
        (response)=>{
          this._router.navigate(["home/machinecode/management"]);
        },
        (error)=>console.log(error)
      );
    }
   }
   ngOnInit() {
    let selectedId;
    this._route.paramMap.subscribe(
      (params: ParamMap) => {
        selectedId = params.get('id');        
        if(selectedId){
          this.update = true;
          this._machineCodeService.getMachineCodebyId(selectedId).subscribe(
            (machineCode)=>{
              this.machineCodeToUpdate=machineCode;
              this.machineCodeSubmissionForm.patchValue(machineCode);
            },
          );
        }
        else{
          this.update = false;
        }
    });
  }
  cancelSubmission(){
    this._router.navigate(['home/machinecode/management']);
  }

}
