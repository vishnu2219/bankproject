import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //var initialization

  // acno: any
  //uname: any
  //psw: any

  constructor(private ds: DataService,private router:Router,private fb:FormBuilder) { } //injecting method of one class in another class

  //model for register form    14.3.2023
  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })

  ngOnInit(): void { }

  register() {
    
    var acno = this.registerForm.value.acno
    var uname = this.registerForm.value.uname
    var psw = this.registerForm.value.psw

    if(this.registerForm.valid){
      const result = this.ds.register(acno, uname, psw)
      if (result) {
        alert("registerd successfully")
        this.router.navigateByUrl("")
      }
      else {
        alert("user already exist")
      }
   
      }
      else{
        alert("invalid form")
      }
    }
  }

  
  
    

