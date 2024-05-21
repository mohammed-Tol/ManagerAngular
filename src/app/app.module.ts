import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerEnquiryListComponent } from './manager-home/manager-enquiry-list.component';
import {  HttpClientModule } from '@angular/common/http';
import { ManagerViewEnquiryComponent } from './manager-view-enquiry/manager-view-enquiry.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ManagerHomeComponent,
    ManagerEnquiryListComponent,
    ManagerViewEnquiryComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
