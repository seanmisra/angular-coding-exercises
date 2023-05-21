import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { interval, Observable, of, ReplaySubject, Subject, Subscription, timer } from 'rxjs';
import { TestData } from '../test-data.service';
import { MainBottomComponent } from './main-bottom/main-bottom.component';
import { MainTopComponent } from './main-top/main-top.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TestData]
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor(private testData: TestData) { }

  sampleSportsOne = [
    "tennis",
    "soccer",
    "basketball",
    "baseball",
    "hockey",
    "cricket",
    "golf"
  ]

  sampleSportsTwo = [
    "tennis",
    "soccer",
    "basketball",
    "baseball",
    "hockey",
    "cricket",
    "golf"
  ]

  ngOnInit(): void {
    // will make 3 http calls
    this.testData.getAllAnimals();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  addSport() {
    this.sampleSportsOne.push("badminton");
    this.sampleSportsTwo.push("badminton");
  }

  addSportByReference() {
    this.sampleSportsOne = [
      "badminton",
      ...this.sampleSportsOne
    ]
    
    this.sampleSportsTwo = [
      "badminton",
      ...this.sampleSportsTwo
    ]
  }
 
}