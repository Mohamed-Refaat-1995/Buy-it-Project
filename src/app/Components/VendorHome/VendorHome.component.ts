import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-VendorHome',
  templateUrl: './VendorHome.component.html',
  styleUrls: ['./VendorHome.component.css']
})
export class VendorHomeComponent implements OnInit {

  constructor(private router:Router,private shared:SharedDataService) { }

  ngOnInit() {
  }
  login()
  {
      this.shared.nextPath=ComponentNames.vendorLogin;
      this.router.navigate([ComponentNames.Spinner]);
  }
  SignUp()
  {
    this.shared.nextPath=ComponentNames.VendorRegistration;
    this.router.navigate([ComponentNames.Spinner]);

  }
}
