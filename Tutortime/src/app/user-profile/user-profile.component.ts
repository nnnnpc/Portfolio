import { Component, OnInit } from '@angular/core';
import { UserProfile } from './user-profile';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent{

  profile: UserProfile = {
    name: 'Alphinaud Leveilleur',
    phoneNumber: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    occupation: '',
    subject: '',
  }
}
