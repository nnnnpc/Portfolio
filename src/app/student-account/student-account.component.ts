import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-updateProfile-shared/student.service';
import { Student } from '../student-updateProfile-shared/student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss']
})
export class StudentAccountComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  ngOnInit() {
    var email=localStorage.getItem('emailID');
    this.getStudentDetails(email);
  }
  public getStudentDetails(email: string) {
    this.studentService.getStudentDetails(email).subscribe((res) => {
    this.studentService.student= res as Student;
    }); 
  }
}
