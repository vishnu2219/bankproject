import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //defining variable
  currentUser: any
  curretAcno:any

  userDetails: any = {
    1003: { username: "manil", acno: 1003, password: "manil33", balance: 0, transaction: [] },
    1006: { username: "chugesh", acno: 1006, password: "chugesh66", balance: 0, transaction: [] },
    1009: { username: "raresh", acno: 1009, password: "raresh99", balance: 0, transaction: [] }
  }


  constructor() { }



  // 08.03.2023
  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { username: uname, acno, password: psw, balance: 0 ,transaction:[]}
      return true
    }
  }


  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        //stroning currentUser
        this.currentUser = userDetails[acno]["username"]
        this.curretAcno=acno
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }
  //new method from dashboard
  deposit(acno: any, psw: any, amnt: any) {
    //to convert string amount to int
    var amount = parseInt(amnt)
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amount
        console.log(userDetails);

        //add transaction data
        userDetails[acno]["transaction"].push(
          {
            Type:"Credit",
            Amount:amount
          }
        )

        return userDetails[acno]["balance"]
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  withdraw(acno: any, psw: any, amnt: any) {
    //to convert string amount to int
    var amount = parseInt(amnt)
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        if (amount <= userDetails[acno]["balance"]) {
          userDetails[acno]["balance"] -= amount
          console.log(userDetails);

          //add transaction data          13.3.2023
          userDetails[acno]["transaction"].push(
            {
              Type:"Debit",
              Amount:amount
            }
          )
            console.log(userDetails);
            
          return userDetails[acno]["balance"]
        }
        else {
          alert("insufficent balance")
        }
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }


  //method for getting transaction

  getTransaction(acno:any){

    return this.userDetails[acno]["transaction"]

  }

}
