import { Component, OnInit } from '@angular/core';

//import service class to send request to the server.
import{TutorService} from '../shared/tutor.service';
import {Tutor} from '../shared/tutor.model';


@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss'],
  //to inject service class. 
})
export class AdvanceSearchComponent implements OnInit {
   
  
  constructor(public tutorService:TutorService) { }

  ngOnInit() {
  }

  //function to get tutorlist by location and course name.
  getTutorListByCourseNameLocation(courseName: string,location:string) {
    event.preventDefault();

    var isvalid=true;
    if(courseName==null || courseName=="") 
    {
      alert("please enter valid course Name ");
      isvalid=false;
    }
    if(location==null || location=="")
    {
      alert("please enter valid city name");
      isvalid=false;
    }
    if(isvalid==true)
    {
      this.tutorService.getTutorListByCourseNameLocation(courseName,location).subscribe((res) => {
        this.tutorService.tutors = res as Tutor[];
        if(this.tutorService.tutors.length==0)
        {
          alert("Sorry, there are no tutors in your area who match your requirements at this time");
        }
      });
    }
    
  }

  bookTutor(id:string)
  {

    this.tutorService.tutor = id;
  }
}
