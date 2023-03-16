import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  //var initialization
  user: any

  acno: any
  psw: any
  amnt: any  //ngmodel which defined on html file

  acno1: any
  psw1: any
  amnt1: any // [(ngModel)]="" which define html file

  //constructor works when the component works  
  constructor(private ds: DataService) {

    //acess data from dataservice and store in a variable  
    this.user = this.ds.currentUser

  }
  ngOnInit(): void { }

  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt
    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`your account has been credited ${amnt} and available balance is ${result}`)
    }
    else {
      alert("incorrect accountnumber or password")
    }
  }

  withdraw() {
    var acno = this.acno1
    var psw = this.psw1
    var amnt = this.amnt1
    const result = this.ds.withdraw(acno, psw, amnt)
    if (result) {
      alert(`your account has been debited ${amnt} and available balance is ${result}`)
    }
    else {
      alert("incorrect accountnumber or password")
    }
  }

}
