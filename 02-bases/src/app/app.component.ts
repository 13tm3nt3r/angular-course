import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Dagger Test App';
  public counter: number = 0;

  increaseCounter(value: number):void {
    this.counter += value;
  }

  decreaseCounter(value: number):void {
    this.counter -= value;
  }

  reset():void {
    this.counter = 0;
  }

}
