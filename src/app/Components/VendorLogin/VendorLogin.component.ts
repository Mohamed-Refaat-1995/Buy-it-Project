import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-VendorLogin',
  templateUrl: './VendorLogin.component.html',
  styleUrls: ['./VendorLogin.component.css']
})
export class VendorLoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private shared:SharedDataService,private router:Router) { }

  ngOnInit() {
  }
  goToRegister()
  {

  }
  forgetPassword()
  {
    this.shared.nextPath=ComponentNames.ForgetPassword;
    this.router.navigate([ComponentNames.Spinner]);
  }
  Login()
  {
    this.shared.nextPath=ComponentNames.notApprovedVendor;
    this.router.navigate([ComponentNames.Spinner]);

  }
}
