import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-updateProfile-shared/student.service';
import { Student } from '../student-updateProfile-shared/student.model';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-delete-student-profile',
  templateUrl: './delete-student-profile.component.html',
  styleUrls: ['./delete-student-profile.component.scss']
})
export class DeleteStudentProfileComponent implements OnInit {

  constructor(public studentService: StudentService,private navbarService:NavbarService) { }

  ngOnInit() {
  }

  deleteAccount() {
    
    var email=localStorage.getItem('emailID');
    this.studentService.deleteStudentAccount(email).subscribe((res) => {
    });
    localStorage.removeItem('emailID');
    localStorage.clear();
    this.navbarService.updateLoginStatus(false);
    this.navbarService.setCurrentLoggedUser('');
    
}

}
