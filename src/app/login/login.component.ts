import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = "YOUR PERFECT BANKING PARTNER" // //string interpollation
  data1 = "ENTER YOUR ACCOUNT NUMBER"  //property binding [placeholder]="data2"
  data2 = "ENTER YOUR PASSWORD"  //property binding


  // varaible decleration
  acno: any
  psw: any


  userDetails: any = {
    1003: { username: "manil", acno: 1003, password: "manil33", balance: 0 },
    1006: { username: "chugesh", acno: 1006, password: "chugesh66", balance: 0 },
    1009: { username: "raresh", acno: 1009, password: "raresh99", balance: 0 }
  }


  constructor() { }

  ngOnInit(): void {

  }

  // method started
  // event binding method starts
  // normal event binding
  // login(){
  //   // alert("login success")
  //   var acnum=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails [acnum]["password"]){
  //       alert('login success')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //   else{
  //     alert("incorrect username")
  //   }
  // }

  // hai(){
  //   alert('nthadad njettityo')
  // }

                                                // dollar event binding starts
  // var declaration is included in this

  //   acnoChange(event:any){
  //     this.acno=event.target.value;
  //     console.log(this.acno);
  //   }

  //   passChange(event:any){
  //     this.psw=event.target.value;
  //     console.log(this.psw); 
  //   }  
                                                  //dollar event binding ends

                                                  //event binding with template rendering starts
  login(acnum: any, psw: any) {
    console.log(acnum.value,psw.value);
    
    var acnum = acnum.value
    var psw = psw.value
    var userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert('login success')
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert("incorrect username")
    }
  }

}


                                                //evevnt binding with template rendering ends

//06.03.2023 this project started to push on git


