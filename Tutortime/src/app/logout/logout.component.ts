import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router ,private navbarService:NavbarService) { }

  ngOnInit() {
    this.navbarService.updateNavAfterAuth();
    localStorage.removeItem('emailID');
    localStorage.clear();
    this.navbarService.updateLoginStatus(false);
    this.navbarService.setCurrentLoggedUser('');
    this.navbarService.updateNavAfterLogout();
    this.router.navigate(['/tutortime']);
  }

}
