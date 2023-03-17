import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //var initialization

  acno: any
  uname: any
  psw: any

  constructor(private ds: DataService,private router:Router,private fb:FormBuilder) { } //injecting method of one class in another class

  //model for register form    14.3.2023
  registerfrom=this.fb.group({
    acno:[''],
    psw:[''],
    uname:['']
  })

  ngOnInit(): void { }

  register() {
    var acno = this.acno
    var uname = this.uname
    var psw = this.psw
    const result = this.ds.register(acno, uname, psw)
    if (result) {
      alert("registerd successfully")
      this.router.navigateByUrl("")
    }
    else {
      alert("user already exist")
    }
  }

}
