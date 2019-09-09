import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, FormArrayName } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TimeSheet } from '../shared/models/timesheet';
import { Entry, IEntry } from '../shared/models/entry';
import { TimeCardService } from '../shared/services/timecard.service';
import { JobCodeService } from '../shared/services/job-code.service';
import { MachineCodeService } from '../shared/services/machine-code.service';
import { DatePipe } from '@angular/common';
import { element } from 'protractor';

@Component({
  selector: 'app-timecard-submission',
  templateUrl: './timecard-submission.component.html',
  styleUrls: ['./timecard-submission.component.css']
})
export class TimecardSubmissionComponent implements OnInit, OnDestroy {

  componentTitle: string;
  timeCardSubmissionForm: FormGroup;
  laborCodes: Array<string>;
  machineCodes: Array<string>;
  review: boolean;
  timeCardToReview: TimeSheet;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _timeCardService: TimeCardService, private _jobCodeService: JobCodeService, private _machineCodeService: MachineCodeService, private _route: ActivatedRoute) { 
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
        hours: [],
        total: []
    });
  }
  createMachineEntry(): FormGroup {
    return this._formBuilder.group({
      code: [],
      hours: [],
      total: []
    });
  }

  onSubmit(){
    if(this.review){
      this.timeCardToReview.approved = true;
      this._timeCardService.updateTimeCard(this.timeCardToReview).subscribe(
        (timeCard)=>{
          console.log(timeCard);
        },
        (httpResponseError)=>{
          console.log(httpResponseError);
        }
      );
    }
    else{
      let entries: Array<IEntry> = [];
      let total: number = 0;
      let hours: number = 0;
      this.timeCardSubmissionForm.value.laborEntries.forEach(entry => {
        let entryType = 'labor';
        if(entry.code && entry.hours && entry.total && entryType){
          entries.push(new Entry(entry.code, entry.hours, entry.total, entryType));
          hours+=entry.hours;
          total+=entry.total;
        }
      });
      this.timeCardSubmissionForm.value.machineEntries.forEach(entry => {
        let entryType = 'machine';
        if(entry.code && entry.hours && entry.total && entryType){
          entries.push(new Entry(entry.code, entry.hours, entry.total, entryType));
          hours+=entry.hours;
          total+=entry.total;
        }
      });
      let timeCard: TimeSheet = new TimeSheet(
        this.timeCardSubmissionForm.value.details.code,
        this.timeCardSubmissionForm.value.details.contractorName,
        this.timeCardSubmissionForm.value.details.date, 
        entries,
        false,
        hours,
        total
      );
      this._timeCardService.createTimeCard(timeCard).subscribe(
        response=>{
          console.log(response);
        },
        (httpErrorResponse)=>{
          console.log(httpErrorResponse);
        }
      );
    }
    this._router.navigate(['home/timecard/approval']);
  }
  ngOnInit() {
    let selectedId;
    this._route.paramMap.subscribe(
      (params: ParamMap) => {
        selectedId = params.get('id');        
        if(selectedId){
          this.review = true;
          this._timeCardService.getTimeCardbyId(selectedId).subscribe(
            (timeCard)=>{
              this.timeCardToReview=timeCard;
              let laborEntries: Array<Entry> = [];
              let machineEntries: Array<Entry> = [];
              
              timeCard.entries.forEach(element => {
                if(element.type=="labor")
                  laborEntries.push(element);
                if(element.type=="machine")
                  machineEntries.push(element);
              });
              console.log(laborEntries);
              console.log(machineEntries);
              this.timeCardSubmissionForm = this._formBuilder.group({
                details: this._formBuilder.group({
                  code: [],
                  contractorName: [],
                  date: []
                }),
                laborEntries: this._formBuilder.array(laborEntries),
                machineEntries: this._formBuilder.array(machineEntries)
              });
              this.timeCardSubmissionForm.get('details').disable();
              this.timeCardSubmissionForm.get('laborEntries').disable();
              this.timeCardSubmissionForm.get('machineEntries').disable();
              this.timeCardSubmissionForm.patchValue({
                details: { 
                  code: timeCard.code,
                  contractorName: timeCard.contractorName,
                }
              });              
            },
          );
        }
        else{
          this.review = false;
        }
    });
  }
  ngOnDestroy(){
    this.review = null;
    this.timeCardToReview = null;
  }
  
  cancelSubmission(){
    this._router.navigate(['home/timecard/approval']);
  }

}
