import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  flag = true;
  thirdColor = "red";
  customerForm: FormGroup;
  currentCount;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.updateCookie();
  }

  updateCookie() {
    this.currentCount = this.cookieService.get('cookieCounter');
    console.log('currentCount', this.currentCount);

    if (this.currentCount !== undefined && ! isNaN(parseInt(this.currentCount))) {
      let currentCountParsed = parseInt(this.currentCount)
      currentCountParsed++
      this.cookieService.set('cookieCounter', currentCountParsed.toString());
      console.log("New cookie value: ", currentCountParsed);
      this.currentCount = currentCountParsed;
    } else {
      this.cookieService.set('cookieCounter', "0");
      console.log("No cookie found, setting to 0"); 
      this.currentCount = 0;
    }
  }

  resetCookie() {
    this.currentCount = 0;
    this.cookieService.set("cookieCounter", "0");
  }

}
