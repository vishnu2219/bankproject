import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails: any = {
    1003: { username: "manil", acno: 1003, password: "manil33", balance: 0 },
    1006: { username: "chugesh", acno: 1006, password: "chugesh66", balance: 0 },
    1009: { username: "raresh", acno: 1009, password: "raresh99", balance: 0 }
  }
                                                                                 // 08.03.2023
  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
     userDetails[acno]={username:uname,acno,password:psw,balance:0}
     return true 
    }
  }

  login(acno:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

  constructor() { }


}
