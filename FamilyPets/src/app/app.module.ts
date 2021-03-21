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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';


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
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
