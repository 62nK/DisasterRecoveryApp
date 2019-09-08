import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobCodeService } from '../shared/services/job-code.service';
import { JobCode } from '../shared/models/job';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-job-code-submission',
  templateUrl: './job-code-submission.component.html',
  styleUrls: ['./job-code-submission.component.css']
})
export class JobCodeSubmissionComponent implements OnInit, OnDestroy {

  componentTitle: string;
  jobCodeSubmissionForm: FormGroup;
  message: string;
  jobCodeToUpdate: JobCode;
  update: boolean;
  
  constructor(private _jobCodeService: JobCodeService, private router: Router, private _route: ActivatedRoute) { 
    this.componentTitle = "Job Code Submission";
    this.jobCodeSubmissionForm = new FormGroup({
      code: new FormControl("", Validators.required),
      description: new FormControl(),
      hourlyRate: new FormControl("", Validators.required),
      maxDailyHours: new FormControl("", Validators.required)
    });
  }
  onSubmit(){
    if(this.update){
      this.jobCodeToUpdate.code = this.jobCodeSubmissionForm.value.code,
      this.jobCodeToUpdate.description = this.jobCodeSubmissionForm.value.description,
      this.jobCodeToUpdate.hourlyRate = this.jobCodeSubmissionForm.value.hourlyRate,
      this.jobCodeToUpdate.maxDailyHours = this.jobCodeSubmissionForm.value.maxDailyHours
      this._jobCodeService.updateJobCode(this.jobCodeToUpdate).subscribe(
        (response)=>{
          this.router.navigate(["home/jobcode/management"]);
        },
        (error)=>console.log(error)
      );
    }
    else{
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
  }
  ngOnInit() {
    let selectedId;
    this._route.paramMap.subscribe(
      (params: ParamMap) => {
        selectedId = params.get('id');
        if(selectedId){
          this.update = true;
          this._jobCodeService.getJobCodeById(selectedId).subscribe(
            (jobCode)=>{
              this.jobCodeToUpdate=jobCode;
              this.jobCodeSubmissionForm.patchValue(jobCode);
            },
          );
        }
        else{
          this.update = false;
        }
    });
  }
  ngOnDestroy(){   
    this.update = false;
    this.jobCodeToUpdate = null;
  }
  cancelSubmission(){
    this.router.navigate(['home/jobcode/management']);
  }

}
