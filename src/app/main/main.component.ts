import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  flag = true;
  thirdColor = "red";
  customerForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: '',
        existingCustomer: false
      }
    )
  }

  submitForm() {
    console.log(this.customerForm);
  }

}
