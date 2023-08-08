import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';

@Component({
  selector: 'app-bank-payment',
  templateUrl: './bank-payment.component.html',
  styleUrls: ['./bank-payment.component.scss']
})
export class BankPaymentComponent implements OnInit {

constructor(private router:Router)
{

}



  ngOnInit(): void {
    setTimeout(()=>{
this.router.navigate([ComponentNames.SuccessfulPayment])
    },5000)
  }

}
