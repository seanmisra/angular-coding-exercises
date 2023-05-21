import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  // IN BROWSER TOOLS, NETWORK TAB WILL SEE THAT EACH HTTP REQUEST NOW HAS "access-token" PROP SET:
  // Accept: application/json, text/plain, */*
  // Accept-Encoding: gzip, deflate, br
  // Accept-Language: en-US,en;q=0.9,fr;q=0.8
  // access-token: bearer123123124
  // Connection: keep-alive
  // Host: localhost:4200
  // If-None-Match: W/"d5-/lhxOSH31xaQGc5omEikb2TOsl4"
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const dummyToken = "bearer123123124";
    const headers = new HttpHeaders().set('access-token', dummyToken);
    const tokenizedRequest = request.clone(
      {
        headers: headers
      }
    )
    return next.handle(tokenizedRequest);
  }
}
