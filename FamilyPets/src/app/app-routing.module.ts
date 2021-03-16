import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
<<<<<<< HEAD
=======
import { LoginComponent } from './component/login/login.component';
>>>>>>> 666224e9c661ff1c402c30d73ba87f60b5071e81
import {BuyerHomepageComponent} from './component/buyer-homepage/buyer-homepage.component';
import {BreederHomepageComponent} from './component/breeder-homepage/breeder-homepage.component';
import {UserInformationComponent} from './component/user-information/user-information.component';
import {SubmitRequestComponent} from './component/submit-request/submit-request.component';
import {ViewPendingRequestsComponent} from './component/view-pending-requests/view-pending-requests.component';
import {ViewResolvedRequestsComponent} from './component/view-resolved-requests/view-resolved-requests.component';


const routes: Routes = [
<<<<<<< HEAD
  {path: '', pathMatch:'full', component: HomeComponent},// home route   
=======
  {path: '', pathMatch:'full', component: HomeComponent}, // home route
  {path : 'login',  component : LoginComponent }, 
>>>>>>> 666224e9c661ff1c402c30d73ba87f60b5071e81
  {path : 'buyer', component : BuyerHomepageComponent},
  {path : 'breeder', component : BreederHomepageComponent},
  {path : 'info' , component : UserInformationComponent},
  {path: 'submit', component : SubmitRequestComponent},
  {path: 'pending' , component : ViewPendingRequestsComponent},
  {path : 'resolved' , component : ViewResolvedRequestsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
