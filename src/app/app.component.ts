import { Component, resolveForwardRef } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'
import { debounceTime, distinctUntilChanged, Subscription, mergeMap, tap, switchMap, concatMap, interval, combineLatest, of, from, first, last, take, delay, timer, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestData]
})
export class AppComponent implements OnInit {

  applicationName = 'testApplication';
  randomProp = '';
  sub: Subscription;


  constructor(private testData: TestData, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }



}