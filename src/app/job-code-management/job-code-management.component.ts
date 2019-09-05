import { Component, OnInit, DoCheck } from '@angular/core';
import { JobCodeService } from '../shared/services/job-code.service';
import { JobCode } from '../shared/models/job';

@Component({
  selector: 'app-job-code-management',
  templateUrl: './job-code-management.component.html',
  styleUrls: ['./job-code-management.component.css']
})
export class JobCodeManagementComponent implements OnInit, DoCheck {

  componentTitle: string;
  jobCodeList: Array<JobCode>;
  errorMessage: string;

  constructor(private _jobCodeService: JobCodeService) { 
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

  ngDoCheck(): void {
    
  }
}
