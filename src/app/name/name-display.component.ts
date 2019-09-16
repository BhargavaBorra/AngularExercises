import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  constructor() { }
  public name: string;
  public i: number; 
  public Displaylowercase:string ="";
  public Displayuppercase: string ="";

  public caseDivide(){
    this.Displaylowercase="";
    this.Displayuppercase="";
    for(this.i=0;this.i<this.name.length;this.i++){
      if(isNaN(<number><any>this.name[this.i])){
        if(this.name[this.i]==this.name[this.i].toLowerCase()){
          this.Displaylowercase=this.Displaylowercase+this.name[this.i];
        }
        else if(this.name[this.i]==this.name[this.i].toUpperCase()){
          this.Displayuppercase=this.Displayuppercase+this.name[this.i];
        }
      } 
    }
  }

  ngOnInit() {
  }

}
