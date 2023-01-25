import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animals = [
    {
      name: "eagle",
      canFly: true
    },
    {
      name: "dog",
      canFly: false
    },
    {
      name: "cat",
      canFly: false
    },
    {
      name: "bat",
      canFly: true
    }
  ]


  constructor(private testData: TestData) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}