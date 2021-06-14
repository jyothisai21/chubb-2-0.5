import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cardData =[
    {
      card:"Primary Card",
      class:"primary",
     
    },
    {
      card:"Warning Card",
      class:"warning",
     
    },
    {
      card:"Success Card",
      class:"success",
     
    },
    {
      card:"Danger Card",
      class:"danger",
     
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
