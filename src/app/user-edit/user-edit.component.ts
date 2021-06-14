import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  userForm:any;
currentId:any;
  constructor(private activeRoute:ActivatedRoute,private userService:UserService,private route:Router) {
    this.currentId= activeRoute.snapshot.params.id
   }

  ngOnInit(): void {
    let currentUserData=this.userService.returnUserById(this.currentId);
    this.userForm=this.fb.group({
      userid:this.fb.control(0,[Validators.required]),
      username:this.fb.control("",Validators.required),
      age:this.fb.control(0,[Validators.min(18),Validators.max(60)]),
      phonenumber:this.fb.control("",[Validators.required]),
    })
    this.userForm.patchValue('currentUserData')
  }
 



update(){
  this.userService.updateUserById(this.currentId,this.userForm.value);
  this.route.navigate(["/user"])
 
}

}