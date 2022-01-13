import {  OnInit, Component } from '@angular/core';
import AddCourse from '../add-course/AddCourse';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { RegisterComponent } from '../register/register.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;
  userLoggedIn;
 
  constructor(private router: Router, private navbarService: NavbarService) {
    this.router.config.unshift(
      { path: 'login', component: LoginComponent },      
      { path: 'register', component: RegisterComponent },
      { path: 'contact-us', component: ContactUsComponent }
    );
  }
  ngOnInit() {
    // this.navbarService.addItem({ text: 'Login', path: 'login' });
    // this.navbarService.addItem({text:'Register',path:'register'});
    localStorage.getItem('emailID');
    this.userLoggedIn = localStorage.getItem('emailID');
    this.navbarService.updateLoginStatus(this.userLoggedIn);
    this.navbarService.getCurrentLoggedUser().subscribe(status => this.userLoggedIn = status);
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }
}