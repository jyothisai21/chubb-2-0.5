import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList:Array<any>=[]
  user:any;
  delete:boolean=false;
  
  constructor(private userService:UserService) { }
  

  ngOnInit(): void {
    this.userList=this.userService.returnUser();
    
  }
  ondelete(user:any){

    this.user=user;
    this.delete=true;
  }
  onyes(){
  let i=this.userList.indexOf(this.user)
  this.userList.splice(i,1)
  this.delete=false;
  }
 
  onNo(){
  this.delete=false;
  
  }

}
