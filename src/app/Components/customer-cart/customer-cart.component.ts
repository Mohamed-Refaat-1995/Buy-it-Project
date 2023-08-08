import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 2, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 3, symbol: 'Li'},
];

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.scss']
})
export class CustomerCartComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private shared:SharedDataService,private router :Router)
  {

  }
  goToPayment()
  {
    this.shared.nextPath=ComponentNames.Payment;
    this.router.navigate([ComponentNames.Spinner])
  }
}
