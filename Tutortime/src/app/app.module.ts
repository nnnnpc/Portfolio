import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { TutortimeComponent } from './tutortime/tutortime.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { PasswordResetComponent } from './password-reset/password-reset.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';  
import { AddCourseComponent } from './add-course/add-course.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { DiscussionExistingComponent } from './discussion-existing/discussion-existing.component';
import { DiscussionNewComponent } from './discussion-new/discussion-new.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { TutorprofileComponent } from './tutorprofile/tutorprofile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { TutorsettingComponent } from './tutorsetting/tutorsetting.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ShowCourseComponent } from './show-course/show-course.component';
import { TutorTimeBackendService } from './tutor-time-backend.service';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { EditTutorCoursesComponent } from './edit-tutor-courses/edit-tutor-courses.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { OpenInfoComponent } from './open-info/open-info.component';
import{TutorService} from './shared/tutor.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component'
import { StudentAccountComponent } from './student-account/student-account.component';
import { DeleteStudentProfileComponent } from './delete-student-profile/delete-student-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { DeleteTutorProfileComponent } from './delete-tutor-profile/delete-tutor-profile.component';
// import { DeleteTutorProfileComponent } from './delete-tutor-profile/delete-tutor-profile.component';
// import { UpdateTutorProfileComponent } from './update-tutor-profile/update-tutor-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    FooterComponent,
    TutortimeComponent,
    CarouselComponent,
    PasswordResetComponent,
    PageNotFoundComponent,
    AddCourseComponent,
    DiscussionBoardComponent,
    DiscussionExistingComponent,
    DiscussionNewComponent,
    UpdateProfileComponent,
    DeleteProfileComponent,
    TutorprofileComponent,
    TutorsettingComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    ShowCourseComponent,
    TutorDashboardComponent,
    EditTutorCoursesComponent,
    AdvanceSearchComponent,
    OpenInfoComponent,
    StudentDashboardComponent,
    LogoutComponent,
    TutorProfileComponent,
    StudentAccountComponent,
    DeleteStudentProfileComponent,
    DeleteTutorProfileComponent,
    // DeleteTutorProfileComponent,
    // UpdateTutorProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    CommonModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatCardModule, 
    MatButtonModule,
    MatDialogModule
  ],
  providers: [TutorTimeBackendService,TutorService],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent]
})
export class AppModule { }
