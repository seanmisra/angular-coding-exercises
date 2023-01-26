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
  searchForm: FormGroup;

  constructor(private testData: TestData, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.retrievedAnimals = this.testData.getAllAnimals();
  }

  ngOnDestroy() {
  }
}