import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ContentChild('testChild') testChild: ElementRef; 

  constructor(private testData: TestData) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}