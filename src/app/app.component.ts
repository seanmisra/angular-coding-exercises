import { Component } from '@angular/core';
import { TestData } from './test-data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userForm: FormGroup;

  get years() {
    if (this.userForm && this.userForm.get('yearsOfExperience')) {
      return this.userForm.get('yearsOfExperience').value
    } else {
      return null;
    }
  }

  constructor(private testData: TestData) {
    this.userForm = new FormGroup({
      yearsOfExperience: new FormControl('')
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  handleSubmit() {
    console.log(this.userForm); 
  }

}