import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { MyErrorStateMatcher } from 'src/app/Models/Classes/my-error-state-matcher';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-otpcode',
  templateUrl: './otpcode.component.html',
  styleUrls: ['./otpcode.component.scss']
})
export class OTPCodeComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
constructor(private shared:SharedDataService,private router:Router)
{

}
ResetPassword()
{
  this.shared.nextPath=ComponentNames.ResetPassword;
  this.router.navigate([ComponentNames.ResetPassword])
}
}
