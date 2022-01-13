import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TutortimeComponent } from './tutortime/tutortime.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { DiscussionExistingComponent } from './discussion-existing/discussion-existing.component';
import { DiscussionNewComponent } from './discussion-new/discussion-new.component';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';

import { TutorprofileComponent } from './tutorprofile/tutorprofile.component';
import { TutorsettingComponent } from './tutorsetting/tutorsetting.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { ShowCourseComponent } from './show-course/show-course.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { EditTutorCoursesComponent } from './edit-tutor-courses/edit-tutor-courses.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { OpenInfoComponent } from './open-info/open-info.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

import { StudentAccountComponent } from './student-account/student-account.component'
import { DeleteStudentProfileComponent } from './delete-student-profile/delete-student-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { DeleteTutorProfileComponent } from './delete-tutor-profile/delete-tutor-profile.component';

const routes: Routes = [
  {
    path:'delete-profile',component:DeleteProfileComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'nav', component: NavComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'tutorProfile', component: TutorprofileComponent
  },
  {
    path: 'tutortime', component: TutortimeComponent
  },
  {
    path: 'reset', component: PasswordResetComponent
  },
  {
    path: 'addCourse', component: AddCourseComponent
  },
  {
    path: '', redirectTo: '/tutortime', pathMatch: 'full'
  },
  {
    path: 'profile', component: UserProfileComponent
  },
  {
    path: '', redirectTo: '/tutortime', pathMatch: 'full'
  },
  {
    path: 'discussion-board', component: DiscussionBoardComponent
  },
  {
    path:'discussion-existing', component:DiscussionExistingComponent
  },
  {
    path:'discussion-new',component:DiscussionNewComponent
  },
  {
    path:'update-profile',component:UpdateProfileComponent
  },
  
  {
    path: 'tutorprofile', component: TutorprofileComponent
  },
  {
    path: 'tutorsetting', component: TutorsettingComponent
  },
  {
    path: 'show-course', component: ShowCourseComponent
  },
  {
    path: 'tutorDashboard', component: TutorDashboardComponent
  },
  {
    path: 'editCourse', component: EditTutorCoursesComponent
  },
  {
    path:'advance-search',component:AdvanceSearchComponent
  },
  {
    path:'open-info', component: OpenInfoComponent
  },
  {
    path:'student-dashboard', component:  StudentDashboardComponent
  },
  {
   path:'student-account', component:StudentAccountComponent
  },
  {
    path:'delete-student-profile',component:DeleteStudentProfileComponent
  },
  {
    path:'logout', component:  LogoutComponent

  },
  {
    path:'delete-tutor-profile', component: DeleteTutorProfileComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
