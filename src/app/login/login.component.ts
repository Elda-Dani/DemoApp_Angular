import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myroter:Router) { }

username=""
password=""

readLogin=()=>{
  let data={
    "username":this.username,
    "password":this.password
  }
  console.log(data)
if (this.username=="admin" && this.password=="12345") {
  this.myroter.navigate(["/dashboard"])
} else {
  alert("Invalid Login")
  
}
}

  ngOnInit(): void {
  }

}
