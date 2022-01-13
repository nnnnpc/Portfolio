import { Component, OnInit } from '@angular/core';
import { TutorTimeBackendService } from '../tutor-time-backend.service';
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { NavbarService } from '../navbar.service';
// import {deletProfileForms} from "../deleteProfileForm";
import {deletProfileForms} from "../delete-profile/deleteProfileForm";

@Component({
  selector: 'app-delete-tutor-profile',
  templateUrl: './delete-tutor-profile.component.html',
  styleUrls: ['./delete-tutor-profile.component.scss']
})
export class DeleteTutorProfileComponent implements OnInit {
  formFeedback= new FormControl('');

  constructor(private tutorTimeServiceInstance:TutorTimeBackendService, private router: Router) { }

  ngOnInit() {
  }
  onDelete() {
    const obj = {
      'formFeedback': this.formFeedback.value
      
}
return obj;
  }
  // async deleteProfile(){
  //     var emailID = localStorage.getItem('emailID');
  //     var response = await this.tutorTimeServiceInstance.deleteTutorProfile(emailID);
  //     if(response["status"]){
  //       this.router.navigate(['/logout']);
  //     }else{
  //       this.router.navigate(['/tutorDashboard']);
  
  //     }
  //   }
    deleteAccount = new deletProfileForms("");
  submitted = false;
  // async onSuccessfulDeletion(){
  //   this.submitted = true;
  //   await this.deleteProfile();
  //   this.router.navigateByUrl('/tutortime');
  // };
  async deleteProfile(){
    var emailID = localStorage.getItem('emailID');
    var response = await this.tutorTimeServiceInstance.deleteTutorProfile(emailID);
    if(response["status"]){
      this.router.navigate(['/logout']);
    }else{
      this.router.navigate(['/tutorDashboard']);

    }
  }
  // canceldeletion = new deletProfileForms("");
  submit = false;
  oncanceldeletion(){
    this.submit = true;
    this.router.navigateByUrl('/tutorProfile');
  }

}
