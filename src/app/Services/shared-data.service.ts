import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
TextDirection:string='ltr';
nextPath:string='';
vendorDashboardIsCollaped:boolean=false;
  constructor() { }
}
