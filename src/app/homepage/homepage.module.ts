import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { HomepageRoutingModule } from './homepage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { homepageReducer } from './state/homepage.reducer';



@NgModule({
  declarations: [
    HomepageComponent,
    DetailsComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomepageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('homepage', homepageReducer)
  ]
})
export class HomepageModule { 
}