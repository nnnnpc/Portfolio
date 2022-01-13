import { Component, OnInit } from '@angular/core';
import {UsersModel} from './usersModel';
import { StudentService } from '../student-updateProfile-shared/student.service';
import { Student } from '../student-updateProfile-shared/student.model';
import { NgForm } from '@angular/forms';
 import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  constructor(public studentService: StudentService,private router: Router) { 
    this.router=router;
  }

  submitted = false;

  onUpdate(updateForm: NgForm) {
      this.studentService.updateStudentDetails(updateForm.value).subscribe((res) => {
        this.router.navigateByUrl('/student-account');
      });
    this.submitted = true;
  }
  ngOnInit() {
    this.getStudentDetails(localStorage.getItem('emailID'));
  }
  public getStudentDetails(email: string) {
    this.studentService.getStudentDetails(email).subscribe((res) => {
    this.studentService.student= res as Student;

    }); 
  }
}
