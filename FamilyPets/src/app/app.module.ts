import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyerHomepageComponent,
    BreederHomepageComponent,
    UserInformationComponent,
    SubmitRequestComponent,
    ViewPendingRequestsComponent,
    ViewResolvedRequestsComponent,
    ChatComponent,
    NavbarComponent,
    NavbarBreederComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
