import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(): void {
    // Add your form submission logic here
    // You can update the content of the status div based on the submission result
    const statusElement = document.querySelector('.status');
    if (statusElement) {
      statusElement.innerHTML = 'Mail Sent';
    }
  }

}
