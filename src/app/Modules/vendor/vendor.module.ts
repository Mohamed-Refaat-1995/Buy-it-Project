import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorHomeComponent } from 'src/app/Components/VendorHome/VendorHome.component';
import { AngularMaterialModule } from '../AngularMaterial/angular-material/angular-material.module';
import { VendorLoginComponent } from 'src/app/Components/VendorLogin/VendorLogin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotApprovedVendorComponent } from 'src/app/Components/NotApprovedVendor/NotApprovedVendor.component';
import { VendorRegistrationComponent } from 'src/app/Components/VendorRegistration/VendorRegistration.component';
import { VendorDashboardComponent } from 'src/app/Components/VendorDashboard/VendorDashboard.component';
import { VendorHeaderComponent } from 'src/app/Components/VendorHeader/VendorHeader.component';
import { VendorSideBarComponent } from 'src/app/Components/VendorSideBar/VendorSideBar.component';
import { VendorNotificationComponent } from 'src/app/Components/VendorNotification/VendorNotification.component';
import { AddStoreComponent } from 'src/app/Components/AddStore/AddStore.component';
import { NgConfirmModule } from 'ng-confirm-box';

const routes: Routes = [
  { path:'', redirectTo:'vendorHome',pathMatch:'full' },
  { path:'vendorHome', component: VendorHomeComponent },
  { path:'vendorLogin', component: VendorLoginComponent },
  { path:'notApprovedVendor', component: NotApprovedVendorComponent },
  { path:'VendorRegistration', component: VendorRegistrationComponent },
  { path:'VendorDashboard', component: VendorDashboardComponent,
  children:[
    {path:'VendorNotification',component:VendorNotificationComponent},
    {path:'VendorAddStore',component:AddStoreComponent},
  ] },
  { path:'VendorHeader', component: VendorHeaderComponent },
  { path:'VendorSideBar', component: VendorSideBarComponent },
]


@NgModule({
  declarations: [
    VendorHomeComponent,
    VendorLoginComponent,
    NotApprovedVendorComponent,
    VendorRegistrationComponent,
    VendorDashboardComponent,
    VendorHeaderComponent,
    VendorSideBarComponent,
    VendorNotificationComponent,
    AddStoreComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgConfirmModule
  ]
})
export class VendorModule { }
