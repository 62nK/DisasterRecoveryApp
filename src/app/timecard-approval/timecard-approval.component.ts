import { Component, OnInit } from '@angular/core';
import { TimeSheet } from '../shared/models/timesheet';
import { TimeCardService } from '../shared/services/timecard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timecard-approval',
  templateUrl: './timecard-approval.component.html',
  styleUrls: ['./timecard-approval.component.css']
})
export class TimecardApprovalComponent implements OnInit {

  componentTitle: string;
  timeCardList: Array<TimeSheet>;
  errorMessage: string;

  constructor(private _timeCardService: TimeCardService, private _router: Router) { 
    this.componentTitle = "TimeSheet Approval";
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
