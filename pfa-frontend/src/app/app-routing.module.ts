import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { LoginComponent } from './components/login/login.component';
import { MarketComponent } from './components/market/market.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard'
const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'register', component:RegisterComponent},
  { path:'profile', component:ProfileComponent, //canActivate: [AuthGuard]
  },
  { path:'market', component:MarketComponent},
  { path:'market/:id', component:ItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
