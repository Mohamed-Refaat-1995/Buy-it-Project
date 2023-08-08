import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { MyErrorStateMatcher } from 'src/app/Models/Classes/my-error-state-matcher';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-customer-registeration',
  templateUrl: './customer-registeration.component.html',
  styleUrls: ['./customer-registeration.component.scss']
})
export class CustomerRegisterationComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  hide = true;
  constructor(private shared:SharedDataService,private router:Router)
  {

  }
  SignUp()
  {
    this.shared.nextPath=ComponentNames.VerifyEmail;
    this.router.navigate([ComponentNames.Spinner]);
  }
}
