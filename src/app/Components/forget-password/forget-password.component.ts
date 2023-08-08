import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { MyErrorStateMatcher } from 'src/app/Models/Classes/my-error-state-matcher';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  constructor(private shared:SharedDataService,private router:Router)
  {

  }
  sendOTPCode()
  {
    this.shared.nextPath=ComponentNames.SendOTP;
    this.router.navigate([ComponentNames.Spinner]);
  }
}
