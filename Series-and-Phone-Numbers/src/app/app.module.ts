import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { from } from 'rxjs';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { FourthComponent } from './fourth/fourth.component';
import { Component1Component } from './fourth/component1/component1.component';
import { Component2Component } from './fourth/component2/component2.component';
import { Component3Component } from './fourth/component3/component3.component';
import { Component4Component } from './fourth/component4/component4.component';
import { Component5Component } from './fourth/component5/component5.component';

@NgModule({
  declarations: [
    AppComponent,
    MissingNumberComponent,
    PhoneNumberComponent,
    FourthComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
