/**
 * @author: Bhumi Patel, Ganrong Tan
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {discussionForm} from "./discussionForm";
import { LoginRecordService } from '../login-record.service';



@Component({
  selector: 'app-discussion-new',
  templateUrl: './discussion-new.component.html',
  styleUrls: ['./discussion-new.component.scss']
})
export class DiscussionNewComponent implements OnInit {

  
  constructor(private router: Router, private myFirstService: LoginRecordService)
  {
    this.router=router;
    
  }

  DiscussionModel = new discussionForm('', '', new Date().toLocaleString('en-US', { timeZone: 'Canada/Atlantic', hour12: false }), '');
  submitted = false;

  // Create a post
  newPost() {
    const post = {
      'courseID': this.DiscussionModel.courseID,
      'description': this.DiscussionModel.description,
      'time': this.DiscussionModel.time,
      'courseName': this.DiscussionModel.courseName
    }
    this.myFirstService.newPost(post);
    return post;
  }

  ngOnInit() {
    
  }

  NewThread= function ()
  {
    this.router.navigateByUrl('/discussion-board');
  };


}
