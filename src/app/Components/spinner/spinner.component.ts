import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{
constructor(private shared:SharedDataService,private router:Router)
{

}
  ngOnInit(): void {
   setTimeout((next:any)=>{
next=this.shared.nextPath;
    this.router.navigate([next]);
   },1000)

  }
}
