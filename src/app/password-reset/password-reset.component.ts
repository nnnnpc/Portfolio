import { Component, OnInit } from '@angular/core';
import { Validation } from './validation';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginRecordService } from '../login-record.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent{

  constructor(
    private myFirstService: LoginRecordService,
    private activatedRoute: ActivatedRoute
  ){}
  model = new Validation('')
  resetEmail = new FormControl('');
  resetPassword = new FormControl('');
  submitted = false;
  onSubmit() { this.submitted = true; }
  
  async updateTutorPassword() {
    const obj = {
      'email': this.resetEmail.value,
      'password': this.resetPassword.value
    }
    var res = await this.myFirstService.resetTutorPassword(obj);
    return obj;
  }

  async updatePassword() {
    const obj = {
      'student_Email': this.resetEmail.value,
      'student_Password': this.resetPassword.value
    }
    var res = await this.myFirstService.resetPassword(obj);
    return obj;
  }

}


