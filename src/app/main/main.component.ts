import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { interval, Observable, of, ReplaySubject, Subject, Subscription, timer } from 'rxjs';
import { MainBottomComponent } from './main-bottom/main-bottom.component';
import { MainTopComponent } from './main-top/main-top.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor() { }

  // One use case for rxjs timer over setInterval is if you want to emit immediately
  // setInterval will start emitting after 2000 ms, whereas timer will emit immediately then every 2000 ms as well
  // can be observed in console 
  ngOnInit(): void {
    let myTimer = this.getTimer().subscribe(emitted => {
      console.log("TIMER: emitted");
    });

    let myInterval = setInterval(() => {
      console.log("SET_INTERVAL: emitted");
    }, 2000);

    setTimeout(() => {
      console.log("FINISHED");
      myTimer.unsubscribe();
      clearInterval(myInterval);
    }, 10000)
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  getTimer(): Observable<any> {
    return timer(0, 2000);
  }
 
}