import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { JobCodeSubmissionComponent } from './job-code-submission/job-code-submission.component';
import { MachineCodeManagementComponent } from './machine-code-management/machine-code-management.component';
import { MachineCodeSubmissionComponent } from './machine-code-submission/machine-code-submission.component';
import { TimecardApprovalComponent } from './timecard-approval/timecard-approval.component';
import { TimecardSubmissionComponent } from './timecard-submission/timecard-submission.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    JobCodeManagementComponent,
    JobCodeSubmissionComponent,
    MachineCodeManagementComponent,
    MachineCodeSubmissionComponent,
    TimecardApprovalComponent,
    TimecardSubmissionComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
