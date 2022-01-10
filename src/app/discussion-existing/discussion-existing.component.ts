/**
 * @author: Bhumi Patel, Ganrong Tan
 */
import { Component, OnInit } from '@angular/core';
import { discussionForm } from "../discussion-new/discussionForm";
import { LoginRecordService } from '../login-record.service';
import { Config } from 'protractor';
import { config } from 'rxjs';

@Component({
  selector: 'app-discussion-existing',
  templateUrl: './discussion-existing.component.html',
  styleUrls: ['./discussion-existing.component.scss']
})
export class DiscussionExistingComponent implements OnInit {

  public posts;
  discussionForm = new discussionForm('', '', new Date().toLocaleString('en-US', { timeZone: 'Canada/Atlantic', hour12: false }), '');
  constructor(private myFirstService: LoginRecordService) { 
    
  }

  // Show new post on the discussion board
  async showPost(){

    var discussionData = await this.myFirstService.getPost();
    console.log(discussionData);
    // this.updatePostDoc(discussionData);
    this.posts = discussionData;
    
    // this.titleData_Final = this.showTitle(discussionData);
    return discussionData;
  }

  // async showPost_Update(){
    
  // }

  async updatePostDoc() {

    var discussionData = await this.myFirstService.getPost();
    this.posts = discussionData;

    for (var post of this.posts) {
      const obj = {
        'courseID': post["courseID"],
      }
      console.log(obj);
      var tep = await this.myFirstService.getTitle(obj);
      const newObj = {
        'courseID': post["courseID"],
        'courseName': tep[0]["courseName"]
      }
      await this.myFirstService.updatedPostDoc(newObj);
    }
  }

  async ngAfterContentInit(){
    await this.updatePostDoc();
    await this.showPost();
    
  }
  ngOnInit() {
  }

}
