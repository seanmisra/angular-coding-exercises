import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ReplaySubject, Subject, Subscription } from 'rxjs';
import { MainBottomComponent } from './main-bottom/main-bottom.component';
import { MainTopComponent } from './main-top/main-top.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild(MainBottomComponent) mainBottom: MainBottomComponent;
  @ViewChild(MainTopComponent) mainTop: MainTopComponent;

  @ViewChild(MainBottomComponent, {static: true}) mainBottomTwo: MainBottomComponent;
  @ViewChild(MainTopComponent, {static: true}) mainTopTwo: MainTopComponent;

  constructor() { }

  ngOnInit(): void {
    this.getViewChildrenInfo();
  }

  ngAfterViewInit() {
    this.getViewChildrenInfo();
  }

  getViewChildrenInfo() {
    console.log("STATIC: FALSE --- only defined afterViewInit");
    console.log("main bottom component");
    console.log(this.mainBottom);
    console.log("main top component");
    console.log(this.mainTop);

    console.log("STATIC: TRUE --- defined at ngOnInit");
    console.log("main bottom component");
    console.log(this.mainBottomTwo);
    console.log("main top component");
    console.log(this.mainTopTwo);
  }

  ngOnDestroy() {
  }
}