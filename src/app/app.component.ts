import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  messageFromChild: string;

  constructor(private testData: TestData) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  handleTrigger(message: string) {
    this.messageFromChild = message;
  }
}