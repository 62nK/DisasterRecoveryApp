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
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { RoleGuard } from './guards/role.guard';


const routes: Routes = [
  {path: '', redirectTo: 'home/machinecode/management', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home', 
    children:[
      {path: 'machinecode/management', component: MachineCodeManagementComponent, canActivate: [RoleGuard]},
      {path: 'machinecode/submission', component: MachineCodeSubmissionComponent, canActivate: [RoleGuard]},
      {path: 'jobcode/management', component: JobCodeManagementComponent, canActivate: [RoleGuard]},
      {path: 'jobcode/submission', component: JobCodeSubmissionComponent, canActivate: [RoleGuard]},
      {path: 'jobcode/submission/:id', component: JobCodeSubmissionComponent, canActivate: [RoleGuard]},
      {path: 'timecard/approval', component: TimecardApprovalComponent, canActivate: [RoleGuard]},
      {path: 'timecard/submission', component: TimecardSubmissionComponent, canActivate: [RoleGuard]},
    ], 
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
