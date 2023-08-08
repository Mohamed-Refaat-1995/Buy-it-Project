import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-NotApprovedVendor',
  templateUrl: './NotApprovedVendor.component.html',
  styleUrls: ['./NotApprovedVendor.component.css']
})
export class NotApprovedVendorComponent implements OnInit {

  constructor(private shared:SharedDataService,private router:Router) { }

  ngOnInit() {
  }
  logout()
  {
    this.shared.nextPath=ComponentNames.vendorHome;
    this.router.navigate([ComponentNames.Spinner]);
  }
}
