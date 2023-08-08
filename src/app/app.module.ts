import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Modules/AngularMaterial/angular-material/angular-material.module';
import{ReactiveFormsModule} from '@angular/forms';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
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
import { SuccessfulPaymentComponent } from './Components/successful-payment/successful-payment.component'
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgConfirmModule } from 'ng-confirm-box';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SpinnerComponent,
    MainLayoutComponent,
    CustomerLoginComponent,
    ForgetPasswordComponent,
    OTPCodeComponent,
    NewResetPawordComponent,
    CustomerRegisterationComponent,
    VerifyEmailComponent,
    ProductDetailsComponent,
    CustomerCartComponent,
    PaymentComponent,
    BankPaymentComponent,
    SuccessfulPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxImageZoomModule,
    NgConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
