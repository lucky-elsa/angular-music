import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatergoryItemsComponent } from './pages/catergory-items/catergory-items.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : '' , component : HomeComponent , pathMatch : 'full'},
  { path : 'category/:id' , component : CatergoryItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
