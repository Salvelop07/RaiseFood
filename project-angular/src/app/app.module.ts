import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { UserApiService } from './services/user-api.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ClarityModule } from 'clarity-angular';
import { ConfirmProfileComponent } from './confirm-profile/confirm-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { TicketService } from './services/ticket.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AnonSidenavComponent } from './anon-sidenav/anon-sidenav.component';
import { CustSidenavComponent } from './cust-sidenav/cust-sidenav.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { LandingComponent } from './landing/landing.component';
import { GeneralSidenavComponent } from './general-sidenav/general-sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { TicketlineService } from './services/ticketline.service';
import { DishService } from './services/dish.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UpdateProfileComponent,
    ConfirmProfileComponent,
    OrderHistoryComponent,
    DashboardComponent,
    OrderDetailComponent,
    AnonSidenavComponent,
    CustSidenavComponent,
    AdminSidenavComponent,
    LandingComponent,
    GeneralSidenavComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClarityModule.forRoot()
  ],
  providers: [LoginService, UserApiService, TicketService, TicketlineService, DishService],
  bootstrap: [AppComponent]
})
export class AppModule {}