import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:"",component:LoginComponent},                       //path setting            //07.03.2023
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},//07.03.2023
  {path:"transaction",component:TransactionComponent}     //13.03.2023
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
