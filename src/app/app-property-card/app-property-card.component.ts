import { Component } from '@angular/core';

@Component({
  selector: 'app-app-property-card',
  templateUrl: './app-property-card.component.html',
  styleUrls: ['./app-property-card.component.css']
})
export class AppPropertyCardComponent {
property:any = {
  "Id":1,
  "Type":"house",
  "Price":1200
}
}
