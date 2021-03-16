import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerHomepageComponent } from './component/buyer-homepage/buyer-homepage.component';
import { BreederHomepageComponent } from './component/breeder-homepage/breeder-homepage.component';
import { UserInformationComponent } from './component/user-information/user-information.component';
import { SubmitRequestComponent } from './component/submit-request/submit-request.component';
import { ViewPendingRequestsComponent } from './component/view-pending-requests/view-pending-requests.component';
import { ViewResolvedRequestsComponent } from './component/view-resolved-requests/view-resolved-requests.component';
import { ChatComponent } from './component/chat/chat.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarBreederComponent } from './component/navbar-breeder/navbar-breeder.component';
import { HomeComponent } from './component/home/home.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

=======
>>>>>>> 666224e9c661ff1c402c30d73ba87f60b5071e81

@NgModule({
  declarations: [
    AppComponent,
    BuyerHomepageComponent,
    BreederHomepageComponent,
    UserInformationComponent,
    SubmitRequestComponent,
    ViewPendingRequestsComponent,
    ViewResolvedRequestsComponent,
    ChatComponent,
    NavbarComponent,
    NavbarBreederComponent,
<<<<<<< HEAD
    HomeComponent

=======
    HomeComponent    
>>>>>>> 666224e9c661ff1c402c30d73ba87f60b5071e81
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
