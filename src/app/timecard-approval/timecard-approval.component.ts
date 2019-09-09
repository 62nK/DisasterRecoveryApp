import { Component, OnInit } from '@angular/core';
import { TimeSheet } from '../shared/models/timesheet';
import { TimeCardService } from '../shared/services/timecard.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { ADMIN } from '../shared/models/user';

@Component({
  selector: 'app-timecard-approval',
  templateUrl: './timecard-approval.component.html',
  styleUrls: ['./timecard-approval.component.css']
})
export class TimecardApprovalComponent implements OnInit {

  componentTitle: string;
  timeCardList: Array<TimeSheet>;
  errorMessage: string;
  displayReview: boolean;

  constructor(private _timeCardService: TimeCardService, private _router: Router, private _authenticationService: AuthenticationService) { 
    this.componentTitle = "TimeSheet Approval";
    this.displayReview = _authenticationService.getAuthenticatedUser().role==ADMIN;
  }

  ngOnInit() {
    this.getTimeCardList();
  }

  addNewTimeCard(){
    this._router.navigate(["/home/timecard/submission"]);
  }

  getTimeCardList(){
    this._timeCardService.getTimeCardList().subscribe(
      (timeCardList)=>{
        this.timeCardList = timeCardList;
      },
      (error)=>this.errorMessage = error
    );
  }

  update(timeCard: TimeSheet){
  }
  review(timeCard: TimeSheet){
    this._router.navigate(['home/timecard/submission', timeCard._id]);
  }
  remove(timeCard: TimeSheet){
    this._timeCardService.removeTimeCard(timeCard).subscribe(
      (response)=>{
        console.log(response);
        this.getTimeCardList();
      },
      (httpResponseError)=>{
        console.log(httpResponseError);
      }
    );
  }
  ngDoCheck(): void {
    
  }
}
