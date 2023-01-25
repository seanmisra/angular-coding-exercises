import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[randomColor]'
})
export class ColorDirective {
  
  @HostBinding('style.color') color!: string;

  possibleColors = ['blue', 'green', 'red', 'orange', 'magenta'];

  constructor() {
    const randomNumber = Math.floor(Math.random() * 5);
    this.color = this.possibleColors[randomNumber];
  }

}