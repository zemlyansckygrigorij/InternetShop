import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { SelectPageComponent } from './select-page/select-page.component';
import { BasketPageComponent } from './basket-page/basket-page.component';

import {MaterialModule} from './material.module';
import {BROWSER_ANIMATIONS_PROVIDERS} from '@angular/platform-browser/animations/src/providers';
import {DataService} from './data.service';
import {OrderService} from './order.service';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SelectPageComponent,
    BasketPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule,
	  AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService, OrderService],
  // providers: [BROWSER_ANIMATIONS_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

