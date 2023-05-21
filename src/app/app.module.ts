import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { TokenInterceptor } from './token.interceptor';
import { SortPurePipe } from './sort-pure.pipe';
import { SortImpurePipe } from './sort-impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestChildComponent,
    ColorDirective,
    UserComponent,
    ErrorPipe,
    MainComponent,
    MainTopComponent,
    MainBottomComponent,
    SortPurePipe,
    SortImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
