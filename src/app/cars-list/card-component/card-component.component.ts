import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

// @Input() cars = {}

  // constructor() {
  // console.log(this.cars)
  // }

@Input() carCompanyName = '';
@Input() carModel = '';
@Input() carPrice:string = '';
@Input() carMileage:string = '';
@Input() manufacturingYear = '';
@Input() carLocation = '';
@Input() carColor:string = '';

}
