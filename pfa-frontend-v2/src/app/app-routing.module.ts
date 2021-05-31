import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarketComponent } from './components/market/market.component';
import { ClientsComponent } from './components/profile/clients/clients.component';
import { ItemsComponent } from './components/profile/items/items.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'signup', component: RegisterComponent},
  { path:'signin', component: LoginComponent},
  { path:'profile', component: ProfileComponent, //canActivate: [AuthGuard],
      children:[
        { path:'items', component: ItemsComponent},
        { path:'clients', component: ClientsComponent},

      ]
  },
  { path:'market', component: MarketComponent},
  { path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
