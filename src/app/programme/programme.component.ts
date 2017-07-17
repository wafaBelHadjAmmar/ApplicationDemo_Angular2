import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {count} from 'rxjs/operator/count';

@Component({
  selector: 'app-programme',
  template: ` <button (click)="decrement()" class="btn btn-danger">
              -
              </button>
              <input type="text" [value]="count">
              <button (click)="increment()" class="btn btn-success">
              +
              </button>`
})
export class ProgrammeComponent implements OnInit{
  @Input()
  count: number ;
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.count = 10;
  }
  decrement() {
    this.count --;
    this.change.emit(this.count);
  }
  increment() {
    this.count ++;
    this.change.emit(this.count);
  }
}
