import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testSwitch = true;

  dataOne = "This data is coming from the if clause";
  dataTwo = "This data is coming from the else clause";


  constructor(private testData: TestData) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}