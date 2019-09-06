import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-timecard-submission',
  templateUrl: './timecard-submission.component.html',
  styleUrls: ['./timecard-submission.component.css']
})
export class TimecardSubmissionComponent implements OnInit {

  timeCardSubmissionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 

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

  ngOnInit() {
  }

}
