import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'
import { debounceTime, distinctUntilChanged, Subscription, mergeMap, tap, switchMap, concatMap, interval, combineLatest, of, from, first, last, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  applicationName = 'testApplication';
  randomProp = '';
  firstSub: Subscription;
  secondSub: Subscription;
  thirdSub: Subscription;


  


  constructor(private testData: TestData, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    let valuesToEmit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.firstSub = from(valuesToEmit).pipe(
      first()
    ).subscribe(val => {
      console.log("first val: " + val); 
    })

    this.secondSub = from(valuesToEmit).pipe(
      last()
    ).subscribe(val => {
      console.log("last val: " + val);
    })

    this.thirdSub = from(valuesToEmit).pipe(
      take(5)
    ).subscribe(val => {
      console.log("next val: " + val);
    });

  }

  ngOnDestroy() {
    this.firstSub.unsubscribe();
    this.secondSub.unsubscribe();
    this.thirdSub.unsubscribe();
  }



}