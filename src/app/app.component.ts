import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'
import { debounceTime, distinctUntilChanged, Subscription, mergeMap, tap, switchMap, concatMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  applicationName = 'testApplication';
  randomProp = '';
  retrievedNumbs= [];

  
  
  searchControl: FormControl = new FormControl("");
  searchForm: FormGroup = new FormGroup({
    searchInput: this.searchControl
  });

  constructor(private testData: TestData, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    
    let searchObs$ = this.searchForm.get("searchInput").valueChanges;

    searchObs$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(x => console.log(x)),

      // will cancel if new val, before current request finishes
      switchMap(searchVal => {
        return this.testData.getDataTimeout(searchVal)
      })
    ).subscribe(searchData => {
      console.log("returned results");
      console.log(searchData);
      this.retrievedNumbs = searchData;
    });
  }

  ngOnDestroy() {
  }



}