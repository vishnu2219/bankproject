import { Component } from '@angular/core';
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

  constructor(private ds: DataService) { } //injecting another class in another class

  ngOnInit(): void { }

  register() {
    var acno = this.acno
    var uname = this.uname
    var psw = this.psw
    const result = this.ds.register(acno, uname, psw)
    if (result) {
      alert("registerd successfully")
    }
    else {
      alert("user already exist")
    }
  }

}
