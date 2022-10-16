import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDemoComponent } from './add-demo/add-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:AddDemoComponent
  },
  {
    path:"view",component:ViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDemoComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
