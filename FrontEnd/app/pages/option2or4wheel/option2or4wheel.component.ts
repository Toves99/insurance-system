import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option2or4wheel',
  templateUrl: './option2or4wheel.component.html',
  styleUrls: ['./option2or4wheel.component.css']
})
export class Option2or4wheelComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {}

  goToPage(pageName: string):void {
    this.router.navigate([`${pageName}`]);
    // window.open(pageName, "_blank");
  }

}
