import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit  {
  key:number=0;
  constructor(private render:Renderer2,private shared:SharedDataService,private router:Router)
  {

  }
  ngAfterViewInit(): void {
    if(this.key==1)
    {
      document.documentElement.dir='rtl'

    }
  }
  changeLanuage()
  {
  document.body.dir='rtl';
    this.shared.nextPath='';
    this.router.navigate(['Spinner']);


  }
  toggleDarkMode()
  {
    document.body.classList.toggle('dark-mode');
  }
  Login()
  {
    this.shared.nextPath='CustomerLogin';
    this.router.navigate(['Spinner']);

  }
  Register()
  {
    this.shared.nextPath=ComponentNames.CustomerRegistration;
    this.router.navigate([ComponentNames.Spinner]);
  }

}
