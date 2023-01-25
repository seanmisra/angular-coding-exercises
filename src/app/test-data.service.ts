import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class TestData {
    constructor(private http: HttpClient) {
    }

    getData(): Observable<any> {
        return this.http.get("./assets/mockData.json");
    }
}