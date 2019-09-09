import { Component, OnInit } from '@angular/core';
import { Animals } from '../Animals';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-animal-display',
  templateUrl: './animal-display.component.html',
  styleUrls: ['./animal-display.component.css']
})
export class AnimalDisplayComponent implements OnInit {

  constructor() { }
  //selectedAnimal:Animals = new Animals(1, 'Chimpanzee', 'Chimpanzee.png');
  public animals: Animals[]=[
    {id:1,name:'Chimpanzee'},
    {id:2,name:'Dog'},
    {id:3,name:'Lion'},
    {id:4,name:'Panda'},
    {id:5,name:'Squirrel'}
  ]
  
  ngOnInit() {
  }
  public show: boolean = false;
  public z:string;
  onChange(deviceValue: any) {
    //console.log(deviceValue);
    //this.z=deviceValue;
    this.animals.forEach(s => { 

      if(s.id ==deviceValue )
      {
        this.z=s.name;
      }
      
    });
    this.show=true;
    
}
}
