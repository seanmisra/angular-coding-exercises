import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'
import { debounceTime, distinctUntilChanged, Subscription, mergeMap, tap, switchMap, concatMap, interval, combineLatest, of, from, first, last, take, delay, timer, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  applicationName = 'testApplication';
  randomProp = '';
  sub: Subscription;


  constructor(private testData: TestData, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    let obs1$ = interval(1000);
    let obs2$ = timer(7000);

    this.sub = obs1$.pipe(
      takeUntil(obs2$)
    ).subscribe(val =>
      console.log(val)
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}