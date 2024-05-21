import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {
  // Boolean variable to control the visibility of the success message
  public isRenewed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Function to handle form submission
  onSubmit() {
    // Perform the form submission logic here
    // For now, let's just set the isRenewed variable to true
    this.isRenewed = true;
  }
}
