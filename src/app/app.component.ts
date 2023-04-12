import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'
import { debounceTime, distinctUntilChanged, Subscription, mergeMap, tap, switchMap, concatMap, interval, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  applicationName = 'testApplication';
  randomProp = '';

  


  constructor(private testData: TestData, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    let obs1$ = interval(1000);
    let obs2$ = interval(2000);
    let obs3$ = interval(5000);

    let counter = 0;
    let intervalCounter = setInterval(() => {
      counter++;
      console.log("Seconds elapsed: " + counter);
    }, 1000);

    let combinedSub = combineLatest([obs1$, obs2$, obs3$], (one, two, three) => {
      return [one, two, three];
    }).subscribe(allData => {
      // notice that the first emission is when all observables emit at least one value (after 5 seconds)

      console.log("obs1$: ", allData[0]);
      console.log("obs2$: ", allData[1]);
      console.log("obs3$: ", allData[2]);
    });

    // finish after 10 seconds
    setTimeout(() => {
      combinedSub.unsubscribe();
      clearInterval(intervalCounter);
    }, 10000);

  }

  ngOnDestroy() {
  }



}