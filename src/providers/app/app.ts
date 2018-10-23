import { Logger } from '../../providers/logger/logger';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {CategoryModel, ProjectModel, StatusModel} from '../../models/project.model';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class AppProvider {
    public api = environment.baseAPI;
    private httpOptions: any;

    constructor(
        public http: HttpClient,
        private _cookieService: CookieService,
        private logger: Logger
    ) {
        this.logger.debug('AppProvider initialized');

        let csrf = this._cookieService.get("csrftoken");
        if (typeof(csrf) === 'undefined') {
            csrf = '';
        }
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': csrf })
        };
    }

    getStatistics() {
        return this.http.get(this.api + '/statistics/?format=json');
    }

    getProjects() {
        return this.http.get(this.api + '/projects/?format=json');
    }

    getProject(slug: string): Observable<ProjectModel> {
        return this.http.get<ProjectModel>( this.api + '/projects/' + slug + '/?format=json');
    }

    addProject(data: any) {
        const body = JSON.stringify(data);
        return this.http.post(this.api + '/projects/?format=json', body, this.httpOptions);
    }

    getCategories() {
        return this.http.get(this.api + '/categories/?format=json');
    }

    getStatuses() {
        return this.http.get(this.api + '/statuses/?format=json');
    }

    search(value: string) {
        return this.http.get(this.api + '/projects/?search=' + value + '&format=json');
    }
}
