import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { ChurchComponent } from './church/church.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PersondataService } from './_service/persondata.service';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddchurchComponent } from './addchurch/addchurch.component';

@NgModule({
  declarations: [
    AppComponent,
    ChurchComponent,
    LocationComponent,
    AdduserComponent,
    AddchurchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    Ng2SmartTableModule,
    FormsModule,                               
    ReactiveFormsModule ,
    HttpClientModule],
  providers: [PersondataService],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
