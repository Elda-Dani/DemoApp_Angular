import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
status:boolean=false

  fetchData=()=>{
    this.myapi.demoData().subscribe(
      (data)=>{
        this.viewData=data
        this.status=true
      }
    )
  }

viewData:any=[]

  ngOnInit(): void {
  }

}
