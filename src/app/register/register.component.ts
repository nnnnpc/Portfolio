import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { TutorServiceService } from '../tutor-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

//created form control for register component
export class RegisterComponent implements OnInit {

  
  full_name= new FormControl('');
  tutorCity= new FormControl('');
  email= new FormControl('');
  phoneNumber= new FormControl('');
  password= new FormControl('');
  confirmPassword= new FormControl('');
  securityanswer= new FormControl('');
  securityquestion= new FormControl('');
  studentName = new FormControl('');
  studentCity = new FormControl('');
  studentPassword = new FormControl('');
  studentConfirmPassword = new FormControl('');
  studentEmail = new FormControl('');
  studentPhoneNumber = new FormControl('');
  studentQuestion = new FormControl('');
  studentAnswer = new FormControl('');
  designation = new FormControl('');
  
  constructor(private myFirstService:TutorServiceService ){}
  //created a funtion to save the data in database
  registerTutor(){
    const obj = {
      'fullName': this.full_name.value,
      'tutorCity': this.tutorCity.value,
      'email':this.email.value,
      'phoneNumber':this.phoneNumber.value,
      'password':this.password.value,
      'confirmPassword':this.confirmPassword.value,
      'securityanswer':this.securityanswer.value,
      'securityquestion': this.securityquestion.value,
      'designation':this.designation.value
    }
    this.myFirstService.registerTutor(obj);
    return obj;
  }

  registerStudent(){
    console.log('called')
    const object = {
      'student_FName': this.studentName.value,
      'student_City': this.studentCity.value,
      'student_Password': this.studentPassword.value,
      'student_ConfirmPassword': this.studentConfirmPassword.value,
      'student_Email': this.studentEmail.value,
      'student_PhoneNumber': this.studentPhoneNumber.value,
      'studentQuestion': this.studentQuestion.value,
      'studentanswer': this.studentAnswer.value

    }
    this.myFirstService.registerStudent(object);
    return object;
  }
  ngOnInit() {
  }
  }