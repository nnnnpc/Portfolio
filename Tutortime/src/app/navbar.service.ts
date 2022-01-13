import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private links = new Array<{ text: string, path: string }>();
  private isLoggedIn = new Subject<boolean>();
  private userLoggedIn = new Subject<string>();
  private flag;

 
  constructor() {
    this.addItem({ text: 'Login', path: 'login' });
    this.addItem({ text: 'Register', path: 'register' });
    this.addItem({ text: 'Contact us', path: 'contact-us' });
    if(localStorage.getItem('emailID')!=null)
    {
      this.updateNavAfterAuth()
    }
    else{
      this.isLoggedIn.next(false);
    }
  }
 
  getLinks() {
    return this.links;
  }
 
  getLoginStatus() {
    return this.isLoggedIn;
  }
 
  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);// = status;
    if (!status) {
      this.clearAllItems();
      this.addItem({ text: 'Login', path: 'login' });
      this.addItem({ text: 'Register', path: 'register' });
      this.addItem({ text: 'Contact us', path: 'contact-us' });

    }
  }
 getCurrentLoggedUser(){
  return this.userLoggedIn;
 }
 setCurrentLoggedUser(email){
  this.userLoggedIn.next(email);
 }
  // updateNavAfterAuth(text,path): void {
  //   this.clearAllItems();
  //   this.addItem({ text: text, path: path });
  //   this.addItem({ text: 'Add course', path: 'addCourse' });
  //   this.addItem({ text: 'Discussion', path: 'discussion-board' });
  //   this.addItem({ text: 'Logout', path: 'logout' });
  updateNavAfterAuth(): void {
    this.clearAllItems();
    if(localStorage.getItem("userType")=="student")
    {
      this.addItem({text:'My Account',path:'student-account'})
      this.addItem({text:'Advance Search',path:'advance-search'});
      this.addItem({text:'Enrolled Courses',path:'student-dashboard'})
      this.addItem({text:'Discussion Board',path:'discussion-board'});
      this.addItem({ text: 'Logout', path: 'logout' });
    }
    else{
      this.addItem({ text: 'Profile', path: 'tutorprofile' });
      this.addItem({ text: 'Add course', path: 'addCourse' });
      this.addItem({ text: 'Dashboard', path: 'tutorDashboard' });
      this.addItem({ text: 'Discussion', path: 'discussion-board' });
      this.addItem({ text: 'Logout', path: 'logout' });
    }
  }
 
  updateNavAfterLogout(): void {
    this.clearAllItems();
      this.addItem({ text: 'Login', path: 'login' });
      this.addItem({ text: 'Register', path: 'register' });
      this.addItem({ text: 'Contact us', path: 'contact-us' });
  }
  addItem({ text, path }) {
    this.links.push({ text: text, path: path });
  }
 
  removeItem({ text }) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }
 
  clearAllItems() {
    this.links.length = 0;
  }
}
