import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totale',
  template: `
        Nombre totale des chapitres : {{ myCount }}<br>
          <app-programme
           [count]="myCount"
           (change)="countChange($event)">
          </app-programme>`
})
export class TotaleComponent implements OnInit {
  myCount:  number;
  constructor() { }

  ngOnInit() {
    this.myCount = 10;
  }
  countChange(event) {
    this.myCount = event;
  }

}
