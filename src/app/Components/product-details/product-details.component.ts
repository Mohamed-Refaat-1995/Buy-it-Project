import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent {
@ViewChild('productContainer') productContainer!:ElementRef;
foods: Food[] = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'},
];
imageSrc:string='../../../assets/shiba3.jpg'
constructor(private Shared:SharedDataService,private router:Router)
{

}


  focusOnProduct()
  {
    console.log('hover....');
    // var ew=new ImageZoom()
  }
  goToCart()
  {
    this.Shared.nextPath=ComponentNames.CustomerCart;
    this.router.navigate([ComponentNames.Spinner]);
  }
}
