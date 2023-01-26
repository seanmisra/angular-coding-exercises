import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  retrievedAnimals = [];
  $animalSub = new Subscription();

  constructor(private testData: TestData, private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  handleLogin() {
    this.authService.isLoggedIn.next(true);
    this.router.navigate(['homepage']);
  }

}