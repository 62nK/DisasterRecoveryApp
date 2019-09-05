import { Component, OnInit, DoCheck } from '@angular/core';
import { JobCodeService } from '../shared/services/job-code.service';
import { JobCode } from '../shared/models/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-code-management',
  templateUrl: './job-code-management.component.html',
  styleUrls: ['./job-code-management.component.css']
})
export class JobCodeManagementComponent implements OnInit, DoCheck {

  componentTitle: string;
  jobCodeList: Array<JobCode>;
  errorMessage: string;

  constructor(private _jobCodeService: JobCodeService, private _router: Router) { 
    this.componentTitle = "Job Code Management";
  }

  ngOnInit() {
    this._jobCodeService.getJobCodeList().subscribe(
      (jobCodeList)=>{
        this.jobCodeList = jobCodeList;
      },
      (error)=>this.errorMessage = error
    );
  }

  addNewJobCode(){
    this._router.navigate(["/home/jobcode/submission"]);
  }
  updateJobCode(jobCode: JobCode){
    this._router.navigate(["/home/jobcode/submission"]);
  }
  removeJobCode(jobCode: JobCode){
    console.log("pretend jobcode "+jobCode._id+" was removed");
  }

  ngDoCheck(): void {
    
  }
}
