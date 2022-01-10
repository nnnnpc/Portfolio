import { Component, OnInit } from '@angular/core';
import { Form } from './form'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent  {

  model = new Form('', '', '', '');
  submitted = false;
  onSubmit() { this.submitted = true; }

}
