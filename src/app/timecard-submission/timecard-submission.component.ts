import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-timecard-submission',
  templateUrl: './timecard-submission.component.html',
  styleUrls: ['./timecard-submission.component.css']
})
export class TimecardSubmissionComponent implements OnInit {

  timeCardSubmissionForm: FormGroup;

  constructor() { 
    this.timeCardSubmissionForm = new FormGroup({
      code: new FormControl(),
      contractorName: new FormControl(),
      date : new FormControl(),
      laborEntry : new FormGroup({
        entry: new FormControl(),
      }),
    });
  }

  ngOnInit() {
  }

}
