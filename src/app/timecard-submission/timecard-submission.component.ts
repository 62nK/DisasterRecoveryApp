import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, FormArrayName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timecard-submission',
  templateUrl: './timecard-submission.component.html',
  styleUrls: ['./timecard-submission.component.css']
})
export class TimecardSubmissionComponent implements OnInit {

  componentTitle: string;
  timeCardSubmissionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) { 
    this.componentTitle = "TimeSheet Approval";
    this.timeCardSubmissionForm = _formBuilder.group({
      details: _formBuilder.group({
        code: [],
        contractorName: [],
        date: []
      }),
      laborEntries: this._formBuilder.array([this.createLaborEntry()]),
      machineEntries: this._formBuilder.array([this.createMachineEntry()])
    });
  }

  addMachineEntry() {
    const machineEntries = this.timeCardSubmissionForm.get('machineEntries') as FormArray;
    machineEntries.push(this.createMachineEntry());
  }

  addLaborEntry() {
    const laborEntries = this.timeCardSubmissionForm.get('laborEntries') as FormArray;
    laborEntries.push(this.createLaborEntry());
  }

  createLaborEntry(): FormGroup {
    return this._formBuilder.group({
        code: [],
        hoursWorked: [],
        total: []
    });
  }
  createMachineEntry(): FormGroup {
    return this._formBuilder.group({
      code: [],
      hoursUsed: [],
      total: []
    });
  }

  onSubmit(){
    console.log(this.timeCardSubmissionForm.value.details.code);
    console.log(this.timeCardSubmissionForm.value.details.contractorName);
    console.log(this.timeCardSubmissionForm.value.details.date);
    this.timeCardSubmissionForm.value.laborEntries.forEach(entry => {
      if(entry.code){
        console.log(entry.code);
      }
      if(entry.hoursWorked){
        console.log(entry.hoursWorked);
      }
      if(entry.total){
        console.log(entry.total);
      }
    });
    // this._router.navigate(['home/timecard/approval']);
  }
  ngOnInit() {
  }

}
