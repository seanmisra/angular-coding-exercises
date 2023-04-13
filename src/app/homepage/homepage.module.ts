import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    HomepageComponent,
    DetailsComponent,
    InfoComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { 
  constructor() {
    // will not display when the site first loads, only when navigating to /homepage
    console.log("Lazily loaded!");
  }
}
