import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestChildComponent } from './test-child/test-child.component';
import { ColorDirective } from './color.directive';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { ErrorPipe } from './error.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { MainTopComponent } from './main/main-top/main-top.component';
import { MainBottomComponent } from './main/main-bottom/main-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChildComponent,
    ColorDirective,
    UserComponent,
    ErrorPipe,
    MainComponent,
    MainTopComponent,
    MainBottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
