import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  simpleSubject = new Subject();
  replaySubject = new ReplaySubject(3);

  simpleSubscription = new Subscription();
  replaySubscription = new Subscription();


  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.testSimpleSubject();
    this.testReplaySubject();
  }

  testSimpleSubject() {
    this.simpleSubject.next(1); 
    this.simpleSubject.next(2);

    this.simpleSubscription = this.simpleSubject.subscribe(val => {
      console.log("from simple subject: " + val);
    });

    this.simpleSubject.next(3); 
    this.simpleSubject.next(4);
    this.simpleSubject.next(5);
  }

  testReplaySubject() {
    this.replaySubject.next(1); 
    this.replaySubject.next(2); 
    this.replaySubject.next(3);

    
    this.replaySubscription = this.replaySubject.subscribe(val => {
      console.log("from replay subject: " + val);
    });

    this.replaySubject.next(4); 
    this.replaySubject.next(5); 
  }

  ngOnDestroy() {
    this.simpleSubscription.unsubscribe();
    this.replaySubject.unsubscribe();
  }
}
