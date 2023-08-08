import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { VendorSideBarComponent } from '../VendorSideBar/VendorSideBar.component';
import { VendorDashboardComponent } from '../VendorDashboard/VendorDashboard.component';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { ComponentNames } from 'src/app/Enums/component-names';
import { Router } from '@angular/router';

@Component({
  selector: 'app-VendorHeader',
  templateUrl: './VendorHeader.component.html',
  styleUrls: ['./VendorHeader.component.css']
})
export class VendorHeaderComponent implements OnInit {
@Output() isCollapsed:EventEmitter<boolean>;
buttonClicked:boolean=false;

  constructor(private shared:SharedDataService,private router:Router) 
  {
    this.isCollapsed=new EventEmitter<boolean>();
   }

  ngOnInit() {
  }
  collapseSideBar()
  {
    this.buttonClicked=!this.buttonClicked;
    this.isCollapsed.emit(this.buttonClicked);
  }
  goToNotification()
  {
    this.shared.nextPath=ComponentNames.VendorNotification;
    this.router.navigate([ComponentNames.Spinner]);
  }
}
