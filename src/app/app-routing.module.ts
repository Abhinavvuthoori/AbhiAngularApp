import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { TelevisionsComponent } from './televisions/televisions.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'help',component:ContactusComponent},
  {path:'info',component:InfoComponent,children:[
    {path:'profile',component:ProfileComponent},
    {path:'settings',component:SettingsComponent}
  ]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
