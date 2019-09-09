import { Component, OnInit } from '@angular/core';
import { Clock } from '../Datetime';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  
  
  constructor(){}
  datetime=new Clock(new Date());
  DatetimeString: String=this.datetime.DateTime();
  ngOnInit() {
  }

}


