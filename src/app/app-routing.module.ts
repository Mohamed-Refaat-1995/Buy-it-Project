import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomerLoginComponent } from './Components/customer-login/customer-login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { OTPCodeComponent } from './Components/otpcode/otpcode.component';
import { NewResetPawordComponent } from './Components/new-reset-paword/new-reset-paword.component';
import { CustomerRegisterationComponent } from './Components/customer-registeration/customer-registeration.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CustomerCartComponent } from './Components/customer-cart/customer-cart.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { BankPaymentComponent } from './Components/bank-payment/bank-payment.component';
import { SuccessfulPaymentComponent } from './Components/successful-payment/successful-payment.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'',component:MainLayoutComponent,children:[
    {path:'Home',component:HomeComponent},
    {path:'ProductDetails',component:ProductDetailsComponent},
    {path:'CustomerCart',component:CustomerCartComponent},

  ]},
  {path:'CustomerLogin',component:CustomerLoginComponent},
  {path:'ForgetPassword',component:ForgetPasswordComponent},
  {path:'Spinner',component:SpinnerComponent},
  {path:'SendOTP',component:OTPCodeComponent},
  {path:'ResetPassword',component:NewResetPawordComponent},
  {path:'CustomerRegistration',component:CustomerRegisterationComponent},
  {path:'VerifyEmail',component:VerifyEmailComponent},
  {path:'Payment',component:PaymentComponent},
  {path:'BankPayment',component:BankPaymentComponent},
  {path:'SuccessfulPayment',component:SuccessfulPaymentComponent},
  {
    path: 'Vendor', 
    loadChildren: () => import('./Modules/vendor/vendor.module').then(m => m.VendorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
