import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobCodeService } from '../shared/services/job-code.service';
import { JobCode } from '../shared/models/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-code-submission',
  templateUrl: './job-code-submission.component.html',
  styleUrls: ['./job-code-submission.component.css']
})
export class JobCodeSubmissionComponent implements OnInit {

  componentTitle: string;
  jobCodeSubmissionForm: FormGroup;
  message: string;
  
  constructor(private _jobCodeService: JobCodeService, private router: Router) { 
    this.componentTitle = "Job Code Submission";
    this.jobCodeSubmissionForm = new FormGroup({
      code: new FormControl("", Validators.required),
      description: new FormControl(),
      hourlyRate: new FormControl("", Validators.required),
      maxDailyHours: new FormControl("", Validators.required)
    });
  }
  onSubmit(){
    let jobCode = new JobCode(
      this.jobCodeSubmissionForm.value.code,
      this.jobCodeSubmissionForm.value.description,
      this.jobCodeSubmissionForm.value.hourlyRate,
      this.jobCodeSubmissionForm.value.maxDailyHours
    );
    this._jobCodeService.createJobCode(jobCode).subscribe(
      (response)=>{
        this.router.navigate(["home/jobcode/management"]);
      },
      (error)=>console.log(error)
    );
  }
  ngOnInit() {
  }

}
