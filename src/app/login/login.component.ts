import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
public username:string;
public password:any;
public submitted:boolean;


  @ViewChild('form', {static: false}) forms;
  constructor( private router:Router, private toastr: ToastrService, private titleService: Title) { }
  loginForm(){
    this.submitted=false;
    console.log(this.forms)
   if(this.forms.valid){
     if(this.username=="satish" && this.password=="satish2033"){
      this.router.navigate(['dashboard']);
      this.toastr.success('Valid Credentials', 'Login success');
     }
     else{
      this.toastr.error('Invalid Credentials', 'Login Faild');   
     } 
   }
   else{
    this.toastr.info('Username & Password', 'Please enter');
   }
  }

  ngOnInit() {
    this.titleService.setTitle("Login");
  }

}
