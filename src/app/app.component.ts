import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'
import { debounceTime, distinctUntilChanged, Subscription, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  retrievedAnimals = [];
  $animalSub = new Subscription();
  searchForm: FormGroup;

  constructor(private testData: TestData, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      animalSearch: new FormControl('')
    });

    this.$animalSub = this.searchForm.get('animalSearch').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap(result => { return this.testData.getSearchResults(result)})
    ).subscribe(searchResults => {
      this.retrievedAnimals = searchResults;
    })
  }

  ngOnDestroy() {
    this.$animalSub.unsubscribe();
  }
}