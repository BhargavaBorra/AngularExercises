import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  constructor() { }
  public name: string;
  public Displaylowercase:string ="";
  public Displayuppercase: string ="";

  public caseDivide(){
    this.Displaylowercase = this.name.toLowerCase();
    this.Displayuppercase = this.name.toUpperCase();
  }

  ngOnInit() {
  }

}
