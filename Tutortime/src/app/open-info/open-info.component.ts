import { Component, OnInit, ViewChild, ElementRef, Compiler } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import{TutorService} from '../shared/tutor.service';
import {Tutor} from '../shared/tutor.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-open-info',
  templateUrl: './open-info.component.html',
  styleUrls: ['./open-info.component.css']
})
export class OpenInfoComponent implements OnInit {
  constructor(public tutorService:TutorService,private router: Router) { 
    this.router=router;
  }
 
  ngOnInit() {
    this.getTutorsDeatils(this.tutorService.tutor)
  }

  getTutorsDeatils(Id)
  {
  
    this.tutorService.getTutorDetailsById(Id).subscribe((res) => {
      this.tutorService.tutor = res as Tutor
    });
  }
 
  bookTutor()
  {
    const obj = {
      '_id':'',
      'studentEmail':localStorage.getItem('emailID'),
      'tutorEmail': this.tutorService.tutor.emailID,
      'TutorName':this.tutorService.tutor.name,
      'course': this.tutorService.tutor.courseName,
      'courseId': this.tutorService.tutor.courseID,
      'Timing':this.tutorService.tutor.timeSlot,
      'Fees': this.tutorService.tutor.fee
    }
    
    this.tutorService.saveBookTutorDeatils(obj).subscribe((res) => {
      this.router.navigateByUrl('/student-dashboard');
    });
    
  }

}
