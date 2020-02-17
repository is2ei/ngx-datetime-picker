import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatetimePickerComponent } from './ngx-datetime-picker.component';



@NgModule({
  declarations: [NgxDatetimePickerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxDatetimePickerComponent]
})
export class NgxDatetimePickerModule { }
