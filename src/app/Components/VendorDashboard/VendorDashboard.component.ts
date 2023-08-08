import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-VendorDashboard',
  templateUrl: './VendorDashboard.component.html',
  styleUrls: ['./VendorDashboard.component.css']
})
export class VendorDashboardComponent implements OnInit,AfterViewInit {
  isCollapsed:boolean=false;
  constructor(private shared:SharedDataService) { }
  ngAfterViewInit(): void {
    this.isCollapsed=this.shared.vendorDashboardIsCollaped;
  }

  ngOnInit() {
  }
  toggleSideBar(data:any)
  {
     this.isCollapsed=data;
      
  }
}
