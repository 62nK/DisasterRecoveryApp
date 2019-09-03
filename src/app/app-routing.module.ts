import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MachineCodeManagementComponent } from './machine-code-management/machine-code-management.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { MachineCodeSubmissionComponent } from './machine-code-submission/machine-code-submission.component';
import { JobCodeSubmissionComponent } from './job-code-submission/job-code-submission.component';
import { TimecardApprovalComponent } from './timecard-approval/timecard-approval.component';
import { TimecardSubmissionComponent } from './timecard-submission/timecard-submission.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path: 'log-in', component: LoginComponent},
  {path: 'machinecode/management', component: MachineCodeManagementComponent},
  {path: 'machinecode/submission', component: MachineCodeSubmissionComponent},
  {path: 'jobcode/management', component: JobCodeManagementComponent},
  {path: 'jobcode/submission', component: JobCodeSubmissionComponent},
  {path: 'timecard/approval', component: TimecardApprovalComponent},
  {path: 'timecard/submission', component: TimecardSubmissionComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
