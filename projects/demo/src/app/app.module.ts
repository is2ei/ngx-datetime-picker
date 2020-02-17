import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxDatetimePickerModule } from 'ngx-datetime-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDatetimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
