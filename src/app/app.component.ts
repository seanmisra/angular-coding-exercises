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

  retrievedData: any;
  testDataSub: Subscription;

  constructor(private testData: TestData) {
  }

  ngOnInit() {
    this.testDataSub = this.testData.getData().subscribe(result => {
      this.retrievedData = result;
    });
  }

  ngOnDestroy() {
    this.testDataSub.unsubscribe();
  }
}