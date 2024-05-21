import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InsuranceService } from 'src/app/services/insurance.service';
import { RegistrationService } from 'src/app/services/registration.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit {
  user1: any;


  constructor(
    private insuranceService:InsuranceService, private snack:MatSnackBar ,private registration:RegistrationService
  ) { }

  vehicals = [
    { value: '2wheelrs', text: '2 wheelrs' },
    { value: '4wheelrs', text: '4 wheelrs' },
    
  ];

  session: any;

  public insurance={
    
    manufacturer:'',
    vehicleType:'',
    model:'',
    drivinglicense:'',
    purchaseDate:'',
    engineNumber:'',
    chasisNumber:''
  };

  ngOnInit(): void { }


  formSubmit()

  {
    console.log(this.insurance);
    if(this.insurance.manufacturer ==''|| this.insurance.manufacturer == null){
     // alert('Manufacturer is required !!');
     this.snack.open
      return;
    }

    if(this.insurance.vehicleType ==''|| this.insurance.vehicleType == null){
      alert('policyVehicalType is required !!');
      return;
    }

    if(this.insurance.model ==''|| this.insurance.model == null){
      alert('Model is required !!');
      return;
    }

    if(this.insurance.drivinglicense ==''|| this.insurance.drivinglicense == null){
      alert('drivinglicense is required !!');
      return;
    }

    
    if(this.insurance.purchaseDate ==''|| this.insurance.purchaseDate == null){
      alert('purchaseDate is required !!');
      return;
    }

    if(this.insurance.engineNumber ==''|| this.insurance.engineNumber == null){
      alert('engineNumber is required !!');
      return;
    }

    if(this.insurance.chasisNumber ==''|| this.insurance.chasisNumber == null){
      alert('ChasisNumber is required !!');
      return;
    }


   //add insurance: insuranceservice
   let user1:any =JSON.parse(localStorage.getItem("user1")!);
   console.log(user1);

   this.insuranceService.addInsurance(this.insurance,user1.userId).subscribe({next:(data)=>{console.log(data);
    Swal.fire('Success', 'Vehicle Insurance is done', 'success');
    // localStorage.setItem('planId',data.planId);
    window.open('plan','_self')
  },
    
    error:(err)=>console.log(err),
    
    complete: ()=>console.log('completed')

  });
  
  


  }
}
