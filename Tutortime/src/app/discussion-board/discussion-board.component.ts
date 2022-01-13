/**
 * @author: Bhumi Patel
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRecordService } from '../login-record.service';

@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.scss']
})
export class DiscussionBoardComponent implements OnInit {

  constructor(private router: Router, private myFirstService: LoginRecordService)
  {
    this.router=router;
  }

  ngOnInit() {
  }
  btnExistClick= function () {
    this.router.navigateByUrl('/discussion-existing');
  };
  btnNewClick=function(){
    this.router.navigateByUrl('/discussion-new');
  }
}
