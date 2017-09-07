import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  submitted = false;
  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
    this.contact.firstname = '';
    this.contact.email = '';
    this.contact.message = '';
  }
  submitForm() {
    this.submitted = true;
    this.contact.firstname = '';
    this.contact.email = '';
    this.contact.message = '';
  }

}

class Contact {
  firstname: string;
  email: string;
  message: string;
}
