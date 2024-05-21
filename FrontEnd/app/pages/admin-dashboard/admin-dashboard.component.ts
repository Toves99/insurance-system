import { Component, OnInit } from '@angular/core';

import { ClaimsService } from 'src/app/services/claims.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  claimsDetails:any;
  
  message:any;
  claims = {policyNumber:'',mobileNumber:'',reason:''}
  constructor(private claimsService:ClaimsService) { 
    this.getClaimDetails();
  }

  ngOnInit(): void {
    let resp=this.claimsService.doClaim(this.claims);
   resp.subscribe((data: any)=>this.message=data);
   console.log(resp);
   this.getClaimDetails();
  }

  public claimsNow(claimId : number){
    
   let resp=this.claimsService.getClaim(claimId);
   resp.subscribe((data: any)=>this.message=data);
   console.log(resp.subscribe((data: any)=>this.message=data));
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
  // Function to handle approval
  approveClaim(claimId: number): void {
    // Find the claim in the array based on claimId
    const claim = this.claimsDetails.find((c: { claimId: number; }) => c.claimId === claimId);

    if (claim) {
      // Update the 'approval' status
      claim.approval = 'Approved';

      // Log the action
      console.log(`Claim with ID ${claimId} has been approved.`);
      console.log('Updated claimsDetails:', this.claimsDetails);
    }
  }

  // Function to handle deletion
  deleteClaim(claimId: number): void {
    // Find the index of the claim in the array based on claimId
    const index = this.claimsDetails.findIndex((c: { claimId: number; }) => c.claimId === claimId);

    if (index !== -1) {
      // Remove the claim from the array
      this.claimsDetails.splice(index, 1);

      // Log the action
      console.log(`Claim with ID ${claimId} has been deleted.`);
      console.log('Updated claimsDetails:', this.claimsDetails);
    }
  }
}
