import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';
import {AdminComponent} from './pages/admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { ClaimsComponent } from './pages/claims/claims.component';
import { FourComponent } from './pages/four/four.component';
import { InsurancesComponent } from './pages/insurances/insurances.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { Option2or4wheelComponent } from './pages/option2or4wheel/option2or4wheel.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PlansComponent } from './pages/plans/plans.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {RenewComponent} from './pages/renew/renew.component';
import { TwoComponent } from './pages/two/two.component';



const routes: Routes = [

{
  path: 'insurances',
  component: InsurancesComponent, 
  pathMatch: 'full',
},

{
  path: 'Registration',
  component: RegistrationComponent,
  pathMatch:'full',
},
{
  path: 'admin',
  component: AdminComponent,
  pathMatch:'full',
},

{
  path: 'admin-dashboard',
  component: AdminDashboardComponent,
  pathMatch:'full',
},


{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',
},

{
  path: 'aboutus',
  component: AboutusComponent,
  pathMatch:'full',
},

{
  path: 'contact',
  component: ContactComponent,
  pathMatch: 'full',
},

{
  path: 'claims',
  component: ClaimsComponent,
  pathMatch: 'full',
},

{
  path: 'renew',
  component: RenewComponent,
  pathMatch: 'full',
},

{
  path: '',
  component: MainComponent,
  pathMatch: 'full'
},

{
  path: 'plan',
  component: PlansComponent,
  pathMatch: 'full',
},

{
  path:'payment',
  component: PaymentComponent,
  pathMatch: 'full',
},

{
  path: 'option',
  component: Option2or4wheelComponent,
  pathMatch: 'full',
},

{
  path: 'twowheelrs',
  component: TwoComponent,
  pathMatch: 'full',
},

{
  path: 'fourwheelrs',
  component: FourComponent,
  pathMatch: 'full',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
