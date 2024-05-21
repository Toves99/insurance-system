import { Component, Injectable, OnInit } from '@angular/core';
import { InsurancePlan } from 'src/app/services/insurancePlans';
import { PlansService } from 'src/app/services/plans.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  insurancePlan = {planType:'',planDuration:0}
  type: any;
  // insurancePlan.planType!: string;
  planAmount!:number;
  year!:number;
  result!:number;


  constructor(private service:PlansService) { }

  ngOnInit(): void {
  }

  AmountCalci() {
    if(this.insurancePlan.planType == "Comprehensive"){
      this.planAmount = 3500;
    }else{
      this.planAmount = 2500;
    }
    this.result = this.planAmount* this.insurancePlan.planDuration;
    
    console.log(this.result);
    

    }

  public addPlans(){

    // let planId:any =JSON.parse(localStorage.getItem("planId")!);
    // console.log(planId);

    let userId:any =JSON.parse(localStorage.getItem("user1")!).userId;
   console.log(userId);


    this.service.addPlans(this.insurancePlan,userId).subscribe(
      data => {console.log("data received"),
      Swal.fire('Success', 'Your plan add successfully!!', 'success');
      localStorage.setItem('planId',data.planId);
      window.open('payment','_self');},
      
      error => console.log("error occured")
      
      
    );
  }

}