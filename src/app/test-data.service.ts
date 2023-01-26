import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable, map, filter} from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class TestData {
    constructor(private http: HttpClient) {
    }

    getNonFlyingAnimals(): Observable<any> {
        return this.http.get('./assets/mockData.json').pipe(
            map((animals: any[]) => {
                return animals.filter((animal: any) => {
                    return !animal.canFly;
                })
            }),
            map((animals: any[]) => {
                const animalArray = [];
                animals.forEach((animal: any) => {
                    animalArray.push({
                        name: animal.name,
                        id: animal.id
                    });
                })
                return animalArray;
            })
        );
    }
}