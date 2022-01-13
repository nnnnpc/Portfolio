import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { TutorServiceService } from '../tutor-service.service';
import { NavbarService } from '../navbar.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

//created form contols for login component
export class LoginComponent  {
  constructor(
    private myFirstService:TutorServiceService,private router:Router ,private navbarService:NavbarService) {}
    email= new FormControl('');
    password= new FormControl('');
  ngOnInit(){
  }

  //function to send the data 
  async sendStudentLoginData(){
    const obj={
        "student_Email":this.email.value,
        "student_Password":this.password.value
    }
    var res = await this.myFirstService.loginStudent(obj);
    if(res["status"]==200){
      localStorage.setItem('emailID',res["emailID"]);
      localStorage.setItem('sessionToken',res["token"]);
      localStorage.setItem('userType',"student");
      if(res!=null ||res["emailID"]!=null){
        this.router.navigate(['/student-dashboard']);
        this.navbarService.updateLoginStatus(true);
        this.navbarService.setCurrentLoggedUser(localStorage.getItem('emailID'));
        this.navbarService.updateNavAfterAuth();
      }
    }
   else{
      alert(res["error"]["message"]);
    }
  }

  //function to send the data 
  async sendTutorLoginData(){
    const obj={
        "email":this.email.value,
        "password":this.password.value
    }
    var res = await this.myFirstService.loginTutor(obj);
    if(res["status"]==200){
      localStorage.setItem('emailID',res["emailID"]);
      if(res!=null ||res["emailID"]!=null){
        this.router.navigate(['/tutorDashboard']);
        this.navbarService.updateLoginStatus(true);
        this.navbarService.setCurrentLoggedUser(localStorage.getItem('emailID'));
        this.navbarService.updateNavAfterAuth();
      }
    }
    else{
      alert(res["error"]["message"]);
    }
  }  
  submitted = false;
  onSubmit() { this.submitted = true 
  }
}
