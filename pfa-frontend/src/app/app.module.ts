import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MarketComponent } from './components/market/market.component';

import {AuthGuard} from './guards/auth.guard';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { DealsComponent } from './components/profile/deals/deals.component'

import { AngularMaterialModule } from './angular-material/angular-material.module'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    MarketComponent,
    ItemDetailsComponent,
    DealsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
