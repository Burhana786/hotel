import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DishlistComponent } from './dishlist/dishlist.component';
import { DishdeailsComponent } from './dishdeails/dishdeails.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:"dishes",component:DishlistComponent},
  {path:"dishitem/:id",component:DishdeailsComponent},
  {path:"rev/:id",component:ReviewComponent},
  {path:"",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
