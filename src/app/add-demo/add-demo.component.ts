import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent implements OnInit {



  constructor(private myapi:ApiService) { }

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
status:boolean=false


readValues=()=>{
  let data={
    "name":this.name,
  "friendName":this.friendName,
  "friendNickName":this.friendNickName,
  "DescribeYourFriend":this.DescribeYourFriend
  }
  console.log(data)
  this.myapi.addDemo(data).subscribe(
    (response)=>{
      console.log(response)
      alert("successfully added")
      this.name=""
  this.friendName=""
  this.friendNickName=""
  this.DescribeYourFriend=""
  this.status=true
    }
  )
}


  ngOnInit(): void {
  }

}
