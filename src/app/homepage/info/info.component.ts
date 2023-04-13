import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {
  userNameValue = ""; // save/retrieve as part of state
  nameControl: FormControl;
  infoForm: FormGroup;

  nameSub = new Subscription();

  constructor(private store: Store<any>) { 
  }

  ngOnInit(): void {
    this.store.select('homepage').subscribe(homepageState => {
      this.userNameValue = homepageState.userName;
    })

    this.nameControl = new FormControl(
      this.userNameValue
    );
    this.infoForm = new FormGroup({
      userName: this.nameControl
    });

    this.nameSub = this.infoForm.get('userName').valueChanges.subscribe(val => {
      this.userNameValue = val;

      this.store.dispatch({
        type: 'name_typeup_action',
        payload: {
          name: this.userNameValue
        }
      })
    })
  }

  ngOnDestroy(): void {
    this.nameSub.unsubscribe();
  }

}
