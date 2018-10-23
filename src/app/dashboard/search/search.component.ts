import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, empty } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import {AppProvider} from '../../../providers';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    query$: Observable<string>;
    result$: Observable<string>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private app: AppProvider
    ) { }

    ngOnInit() {
        this.query$ = this.route.queryParams.pipe(
            map(queryParams => queryParams.q)
        );
        this.result$ = this.query$.pipe(
            switchMap(query => this.tryName(query)),
            tap(query => console.log('no result', query))
        );
    }


    private tryName(query: string): Observable<string> {
        if (query.length > 3) {
            return this.app.search(query).pipe(
                catchError(() => of(null)),
                switchMap((data: any) => {
                    if (data['count'] > 0) {
                        this.router.navigate(['/project', data['results'][0]['slug']], { replaceUrl: true });
                    }
                    return of(query);
                })
            );
        }
        return of(query);
    }
}
