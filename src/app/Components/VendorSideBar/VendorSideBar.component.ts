import { Component, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {  NgConfirmService } from 'ng-confirm-box';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-VendorSideBar',
  templateUrl: './VendorSideBar.component.html',
  styleUrls: ['./VendorSideBar.component.css']
})
export class VendorSideBarComponent implements OnInit,OnChanges {
@Input() sideBarCollapsed:boolean=false;
  constructor(private shared:SharedDataService,private router:Router
    ,private confirm:NgConfirmService ) {
    
   }

  ngOnInit() {
  }
  ngOnChanges()
  {
    console.log(this.sideBarCollapsed);
    
  }
goToAddStore()
{
    this.shared.nextPath=ComponentNames.VendorAddStore;
    this.router.navigate([ComponentNames.Spinner]);
}
goToAddProduct()
{

}
goToShowProducts()
{

}
goToSettings()
{

}
logout()
{
  
   this.shared.nextPath=ComponentNames.vendorHome;
   this.router.navigate([ComponentNames.Spinner]);
}
}
