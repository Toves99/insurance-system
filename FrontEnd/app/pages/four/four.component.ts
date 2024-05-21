import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  age!: number;
  value!:string;
  result!:number;

  CalculatePrem() {
    
    
    var basicPremium = parseInt(this.value)*(15000/100000);
    if(this.age<25){
     var loadings = basicPremium* 0.4; //40 percent 
    }else{
      var loadings = basicPremium* 0.5;
    }
      var discount = basicPremium* 0.1;
    var ncb = discount * 0.3;

    
    this.result = basicPremium + loadings - discount -ncb;
    console.log(this.result);
    

    }

}
