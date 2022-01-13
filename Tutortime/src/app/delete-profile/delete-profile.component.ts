import { Component, OnInit } from '@angular/core';
import {deletProfileForms} from "./deleteProfileForm";
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {
  formFeedback= new FormControl('');

  constructor(private router: Router){ }
  onDelete() {
    const obj = {
      'formFeedback': this.formFeedback.value
      
}
return obj;
  }

  deleteAccount = new deletProfileForms("");
  submitted = false;
  onSuccessfulDeletion(){
    this.submitted = true;
    this.router.navigateByUrl('/tutortime');
  };

  // canceldeletion = new deletProfileForms("");
  submit = false;
  oncanceldeletion(){
    this.submit = true;
    this.router.navigateByUrl('/delete-profile');
  }


  // deleteAccount = new deletProfileForms("");
  // submitted = false;
  // onDelete() {
  //       this.submitted = true;
  //       this.router.navigateByUrl('/tutortime');
  //     }
  ngOnInit() {
  }
}
