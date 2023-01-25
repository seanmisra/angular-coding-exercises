import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  childVar = 'This message is from a string in the child';

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent() {
  }
 
}
