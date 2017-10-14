import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/RX';
import 'rxjs/RX';

export const API_ROOT = 'http://api.icheyy.top/api/v1/';

@Injectable()
export class HttpService {

    headers: Headers = new Headers();
    opts: RequestOptions = new RequestOptions();

    constructor(private http: Http) {
    }

    getArticles(): Observable<any> {
        return this.http.get(API_ROOT + 'articles', this.opts);
    }

    getArticle(id: number): Observable<any> {
        return this.http.get(API_ROOT + 'articles/' + id, this.opts);
    }

    getHotArticles(): Observable<any> {
        return this.http.get(API_ROOT + 'hot_articles', this.opts);
    }

    getHotTags(): Observable<any> {
        return this.http.get(API_ROOT + 'hot_tags', this.opts);
    }
}

