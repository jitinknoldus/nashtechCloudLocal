import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit{

  @Input() carbrand:string="";
  @Input() price:string="";
  @Input() mileage:string="";
  @Input() location:string="";
  @Input() year:string="";
  @Input() color:string="";
  @Input() model:string="";


  constructor() {}

  ngOnInit() {
    console.log(); // The input properties are accessible here.
  }
}
