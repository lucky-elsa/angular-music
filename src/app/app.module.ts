import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayBarComponent } from './components/play-bar/play-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CatergoryItemsComponent } from './pages/catergory-items/catergory-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlayBarComponent,
    HomeComponent,
    CatergoryItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
