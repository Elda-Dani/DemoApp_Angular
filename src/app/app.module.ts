import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDemoComponent } from './add-demo/add-demo.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes:Routes=[
  {
    path:"",component:AddDemoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
