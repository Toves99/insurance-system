import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/services/payment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService:PaymentService,private snack:MatSnackBar,private router: Router) { }

  public payment={
    
    paymentDate:'',
    paymentAmount:'',
    paymentDescription:'',

  };

  ngOnInit(): void {
  }

  paymentSubmit()

  {
    console.log(Math.random().toString().substr(2, 6));
    if(this.payment.paymentDate ==''|| this.payment.paymentDate == null){
     // alert('Manufacturer is required !!');
     this.snack.open
      return;
    }

    if(this.payment.paymentAmount ==''|| this.payment.paymentAmount == null){
      alert('paymentAmount is required!s');
      return;
    }

    if(this.payment.paymentDescription ==''|| this.payment.paymentDescription == null){
      alert('paymentDescription is required !!');
      return;
    }

   //add payment: 
   //let plan:any =JSON.parse(localStorage.getItem("plan")!);
   //console.log(plan);

   this.paymentService.addPlans(this.payment).subscribe({next:(data)=>{console.log(data);
    //localStorage.setItem('planId',data.planId);
    
    Swal.fire('Success', 'Payment is Successfully!!', 'success');
    // Inside your payment success handling logic
    this.router.navigate(['/main']);
    
    },
    error:(err)=>console.log(err),
    
    complete: ()=>console.log('completed')
    


  });

}
}
