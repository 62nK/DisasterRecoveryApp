import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, FormArrayName } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeSheet } from '../shared/models/timesheet';
import { Entry, IEntry } from '../shared/models/entry';
import { TimeCardService } from '../shared/services/timecard.service';
import { JobCodeService } from '../shared/services/job-code.service';
import { MachineCodeService } from '../shared/services/machine-code.service';

@Component({
  selector: 'app-timecard-submission',
  templateUrl: './timecard-submission.component.html',
  styleUrls: ['./timecard-submission.component.css']
})
export class TimecardSubmissionComponent implements OnInit {

  componentTitle: string;
  timeCardSubmissionForm: FormGroup;
  laborCodes: Array<string>;
  machineCodes: Array<string>;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _timeCardService: TimeCardService, private _jobCodeService: JobCodeService, private _machineCodeService: MachineCodeService) { 
    this.getLaborCodes();
    this.getMachineCodes();
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

  getLaborCodes(){
    this.laborCodes = [];
    this._jobCodeService.getJobCodeList().subscribe(
      (jobCodeList)=>jobCodeList.forEach(element => {
        this.laborCodes.push(element.code);
      }),
      (httpResponseError)=>console.log(httpResponseError),
    );
  }
  getMachineCodes(){
    this.machineCodes = [];
    this._machineCodeService.getMachineCodeList().subscribe(
      (machineCodeList)=>machineCodeList.forEach(element => {
        this.machineCodes.push(element.code);
      }),
      (httpResponseError)=>console.log(httpResponseError),
    );
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
    let entries: Array<IEntry> = [];
    this.timeCardSubmissionForm.value.laborEntries.forEach(entry => {
      let entryType = 'labor';
      if(entry.code && entry.hoursWorked && entry.total && entryType)
        entries.push(new Entry(entry.code, entry.hoursWorked, entry.total, entryType));
    });
    this.timeCardSubmissionForm.value.machineEntries.forEach(entry => {
      let entryType = 'machine';
      if(entry.code && entry.hoursUsed && entry.total && entryType)
        entries.push(new Entry(entry.code, entry.hoursUsed, entry.total, entryType));
    });
    let timeCard: TimeSheet = new TimeSheet(
      this.timeCardSubmissionForm.value.details.code,
      this.timeCardSubmissionForm.value.details.contractorName,
      this.timeCardSubmissionForm.value.details.date, 
      entries,
      false
    );
    this._timeCardService.createTimeCard(timeCard).subscribe(
      response=>{
        console.log(response);
      },
      (httpErrorResponse)=>{
        console.log(httpErrorResponse);
      }
    );
    this._router.navigate(['home/timecard/approval']);
  }
  ngOnInit() {
  }

}
