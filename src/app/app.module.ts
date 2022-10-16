import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDemoComponent } from './add-demo/add-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes:Routes=[
  {
    path:"",component:AddDemoComponent
  },
  {
    path:"view",component:ViewComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDemoComponent,
    ViewComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
