import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { VendorDashboardComponent } from '../VendorDashboard/VendorDashboard.component';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-AddStore',
  templateUrl: './AddStore.component.html',
  styleUrls: ['./AddStore.component.css']
})
export class AddStoreComponent implements OnInit,OnChanges {
  @ViewChild(VendorDashboardComponent) dashBoard!:VendorDashboardComponent; 
  updateWidth:boolean=false;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor(private shared:SharedDataService) { }

  ngOnInit() {
  }
ngOnChanges()
{
  
  this.updateWidth=this.dashBoard.isCollapsed;
  console.log(this.updateWidth);
  
}
}
