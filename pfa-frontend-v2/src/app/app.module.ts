import { NgModule } from '@angular/core';
//modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-materials/angular-materials.module';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MarketComponent } from './components/market/market.component'

import { FilterPipe }  from './components/market/filter.pipe';
import { AuthGuard } from './guards/auth.guard';
import { ItemsComponent } from './components/profile/items/items.component';
import { MytableComponent } from './components/mytable/mytable.component';
import { ClientsComponent } from './components/profile/clients/clients.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MarketComponent,
    ItemsComponent,
    MytableComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
