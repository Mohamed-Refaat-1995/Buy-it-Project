import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-successful-payment',
  templateUrl: './successful-payment.component.html',
  styleUrls: ['./successful-payment.component.scss']
})
export class SuccessfulPaymentComponent {
constructor(private shared:SharedDataService,private router:Router)
{
  
}
backTobuyIt()
{
  this.shared.nextPath=ComponentNames.Home;
  this.router.navigate([ComponentNames.Spinner]);
}
}
