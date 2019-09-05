import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobCodeService } from '../shared/services/job-code.service';

@Component({
  selector: 'app-job-code-submission',
  templateUrl: './job-code-submission.component.html',
  styleUrls: ['./job-code-submission.component.css']
})
export class JobCodeSubmissionComponent implements OnInit {

  componentTitle: string;
  jobCodeSubmissionForm: FormGroup;
  
  constructor(private _jobCodeService: JobCodeService) { 
    this.componentTitle = "Job Code Submission";
    this.jobCodeSubmissionForm = new FormGroup({
      code: new FormControl("", Validators.required),
      description: new FormControl(),
      hourlyRate: new FormControl(),
      maxDailyHours: new FormControl()
    });
  }
  onSubmit(){

  }
  ngOnInit() {
  }

}
