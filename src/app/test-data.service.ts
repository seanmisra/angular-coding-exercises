import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { of, Observable, map, debounceTime, distinctUntilChanged, forkJoin, Subscription, delay } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class TestData implements OnDestroy {
    private $animalSub = new Subscription();

    constructor(private http: HttpClient) {
    }

    private getAllAnimalsImpl(): Observable<any> {
        let resultOne = this.http.get('./assets/mockData1.json');
        let resultTwo = this.http.get('./assets/mockData2.json');
        let resultThree = this.http.get('./assets/mockData3.json');

        return forkJoin([resultOne, resultTwo, resultThree]);
    }

    getAllAnimals(): any[] {
        const allAnimals = [];
        this.$animalSub = this.getAllAnimalsImpl().subscribe(allResults => {
            allAnimals.push(...allResults[0]);
            allAnimals.push(...allResults[1]);
            allAnimals.push(...allResults[2]);
        })
        return allAnimals;
    }

    ngOnDestroy() {
        this.$animalSub.unsubscribe();
    }

    // for switchMap practicing
    getDataTimeout(val): Observable<any> {
        if (!val) {
            return of([]).pipe(delay(2000));
        }
        let oneNumb = Math.random();
        let twoNumb = Math.random();
        let threeNumb = Math.random();
        let fourNumb = Math.random();
        let fiveNumb = Math.random();


        return of([oneNumb, twoNumb, threeNumb, fourNumb, fiveNumb]).pipe(
            delay(2000)
        );
    }
}