import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  componentNames!:ComponentNames;
  constructor(private shared:SharedDataService,private router:Router)
  {

  }

  Login()
  {
    this.shared.nextPath=ComponentNames.Home;
    this.router.navigate([ComponentNames.Spinner]);
  }
  forgetPassword()
  {
    this.shared.nextPath=ComponentNames.ForgetPassword;
    this.router.navigate([ComponentNames.Spinner])
  }
  goToRegister()
  {
    this.shared.nextPath=ComponentNames.CustomerRegistration;
    this.router.navigate([ComponentNames.Spinner])

  }
}
