import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

  testObservable$: Observable<number>;
  testObservableTwo$: Observable<any[]>;


  constructor() { }

  ngOnInit(): void {
    this.getObservables();
  }

  getObservables() {
    this.testObservable$ = interval(1000);

    setTimeout(() => {
      this.testObservableTwo$ = of([1, 2, 3, 4, 5]);
    }, 5000)
  }

  ngAfterViewInit() {
  }


  ngOnDestroy() {
  }


}