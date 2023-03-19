import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  //var initialization
  user: any

  // acno: any
  // psw: any
  // amnt: any  //ngmodel which defined on html file

  // acno1: any
  // psw1: any
  // amnt1: any // [(ngModel)]="" which define html file

  //constructor works when the component works  
  constructor(private ds: DataService, private fb: FormBuilder) {

    //acess data from dataservice and store in a variable  
    this.user = this.ds.currentUser

  }

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9A-Za-z]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA_Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void { }

  deposit() {
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt
    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, psw, amnt)
      if (result) {
        alert(`your account has been credited ${amnt} and available balance is ${result}`)
      }
      else {
        alert("incorrect accountnumber or password")
      }
    }
    else {
      alert("invalid form")
    }
  }

  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var psw = this.withdrawForm.value.psw1
    var amnt = this.withdrawForm.value.amnt1
    if (this.withdrawForm.valid) {
      const result = this.ds.withdraw(acno, psw, amnt)
      if (result) {
        alert(`your account has been debited ${amnt} and available balance is ${result}`)
      }
      else {
        alert("incorrect accountnumber or password")
      }
    }
    else {
      alert("invalid form")
    }
  }


}
