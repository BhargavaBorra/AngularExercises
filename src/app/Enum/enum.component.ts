import { Component, OnInit } from '@angular/core';
import { FindingWeek } from '../EnumExample';
@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css']
})
export class EnumComponent implements OnInit {
  public x: String;
  public week:FindingWeek;
  public DisplayWeek: String;
  constructor()
    {this.week=new FindingWeek(); }
  findweek1(){
    this.DisplayWeek=this.week.findWeek(this.x);
  }
  ngOnInit() {
  }

}
