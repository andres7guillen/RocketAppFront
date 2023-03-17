import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRocketComponent } from './components/create-rocket/create-rocket.component';
import { ListRocketComponent } from './components/list-rocket/list-rocket.component';
import { DetailRocketComponent } from './components/detail-rocket/detail-rocket.component';
import { EditRocketComponent } from './components/edit-rocket/edit-rocket.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRocketComponent,
    ListRocketComponent,
    DetailRocketComponent,
    EditRocketComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
