import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = 
[
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  {path:'contact',component:ContactComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'dishdetail/:id',component:DishdetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
