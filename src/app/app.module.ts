import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestChildComponent } from './test-child/test-child.component';
import { ColorDirective } from './color.directive';
import { UserComponent } from './user/user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { ErrorPipe } from './error.pipe';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './homepage/details/details.component';
import { InfoComponent } from './homepage/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChildComponent,
    ColorDirective,
    UserComponent,
    HomepageComponent,
    ErrorPipe,
    DetailsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
