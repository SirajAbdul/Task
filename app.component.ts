import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud-validation';
  allUser : Object | undefined;
  isEdit = false;
  userObj = {
    employeename:'',
    designatation:'',
    salary:'',
    email:'',
    mobile:'',
    qualification:'',
    manager:''
    
  }
  
  constructor(private commonservice:CommonService){}
  ngOnInit(){
    this.getLatestUser();
  }
  addUser(formObj: any){
    console.log(formObj)
    this.commonservice.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
      
    })
  }
  getLatestUser(){
    this.commonservice.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }
  editUser(user: { employeename: string; designatation: string; salary: string; email: string; mobile: string; qualification: string; manager: string; }){
    this.userObj = user;
    this.isEdit = true;
  }
  deleteUser(){
    this.commonservice.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonservice.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
  
}

function user(user: any) {
  throw new Error('Function not implemented.');
}

