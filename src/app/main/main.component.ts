import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { interval, Observable, of, ReplaySubject, Subject, Subscription } from 'rxjs';
import { MainBottomComponent } from './main-bottom/main-bottom.component';
import { MainTopComponent } from './main-top/main-top.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild("dynamicComponent", {read: ViewContainerRef}) dynamicComponent: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }



  ngAfterViewInit() {
  }


  ngOnDestroy() {
  }

  createTopComponent() {
    this.dynamicComponent.clear();
    this.dynamicComponent.createComponent(MainTopComponent);

  }

  createBottomComponent() {
    this.dynamicComponent.clear();
    this.dynamicComponent.createComponent(MainBottomComponent);
  }

  clear() {
    this.dynamicComponent.clear();
  }
 
}