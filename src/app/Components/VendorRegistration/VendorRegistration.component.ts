import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentNames } from 'src/app/Enums/component-names';
import { SharedDataService } from 'src/app/Services/shared-data.service';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-VendorRegistration',
  templateUrl: './VendorRegistration.component.html',
  styleUrls: ['./VendorRegistration.component.css']
})
export class VendorRegistrationComponent implements OnInit ,DoCheck{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  hide = true;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
 email = new FormControl('', [Validators.required, Validators.email]);
 @ViewChild('nationalIdInput') nationalIdInput!:ElementRef;
 nationalInputHTML!:HTMLInputElement;
 isFound:boolean=false;
 nationalIdFileLength:number|undefined=0;
 nationalIdFile!:File;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private _formBuilder: FormBuilder,private shared:SharedDataService,private router:Router) {}
  ngDoCheck(): void {
    if(this.nationalIdFileLength!=undefined&&this.nationalIdFileLength>0)
    {
      this.isFound=true;
    }
    else{
      this.isFound=false;
    }
  }

  ngOnInit() {
  
  }
  deleteNationalIdImage()
  {
    // this.nationalIdFile
  }
  uploadImage(event:any)
  {
    
   this.nationalIdFileLength=this.nationalInputHTML.files?.length;
   this.nationalIdFile=event.target.files[0];

  }
  clickFileInput()
  {
    this.nationalIdInput.nativeElement.click();
    this.nationalInputHTML=this.nationalIdInput.nativeElement as HTMLInputElement;
    console.log(this.nationalInputHTML.files);
    
  }
  SignUp()
  {
      this.shared.nextPath=ComponentNames.VendorDashboard;
      this.router.navigate([ComponentNames.Spinner]);
  }
}
