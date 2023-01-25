import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() sampleText: string;

  @Output() trigger = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent() {
    this.trigger.emit('Message from child');
  }
 

}
