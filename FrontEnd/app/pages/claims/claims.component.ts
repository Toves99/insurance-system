import { Component, OnInit } from '@angular/core';

import { ClaimsService } from 'src/app/services/claims.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  claimsDetails:any;
  
  message:any;
  claims = {
    policyNumber:'',
    mobileNumber:'',
    reason:'',
  }
  constructor(private claimsService:ClaimsService) { 
    this.getClaimDetails();
  }

  ngOnInit(): void {
  }

  public claimsNow(){
   this.claimsService.doClaim(this.claims).subscribe((data: any)=>{this.message=data;
  console.log(data);
  
  });
 
   this.getClaimDetails();
  }

  public getClaimDetails(){
    this.claimsService.getClaims().subscribe(
      (resp) =>{
        console.log(resp);
        this.claimsDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
