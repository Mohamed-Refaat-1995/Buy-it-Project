import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-new-reset-paword',
  templateUrl: './new-reset-paword.component.html',
  styleUrls: ['./new-reset-paword.component.scss']
})
export class NewResetPawordComponent {
  hide = true;
  constructor(private shared:SharedDataService,private router:Router)
  {

  }
  ResetPassword()
  {
    this.shared.nextPath=ComponentNames.Home;
    this.router.navigate([ComponentNames.Spinner])
  }
}
