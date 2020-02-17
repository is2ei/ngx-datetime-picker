import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  // tslint:disable-next-line component-selector
  selector: 'datetime-picker',
  templateUrl: './ngx-datetime-picker.component.html',
  styleUrls: ['./ngx-datetime-picker.component.css']
})
export class NgxDatetimePickerComponent implements OnInit {

  firstDay = 0;
  weekdaysShort = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  constructor() {
  }



  ngOnInit(): void {
  }

}
