import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/RX';
import 'rxjs/RX';
import {User} from "../model/user.model";


export const API_ROOT = 'http://api.icheyy.top/api/v1/';
// export const API_ROOT = 'http://127.0.0.1:8000/api/v1/';

export const TEST_ROOT = 'http://127.0.0.1:8000/api/v1/';

@Injectable()
export class HttpService {

    headers: Headers = new Headers();
    opts: RequestOptions = new RequestOptions();
    private localStorage = window.localStorage;

    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
        this.opts.headers = this.headers;
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

    getTags(): Observable<any> {
        return this.http.get(API_ROOT + 'tags', this.opts);
    }

    getHotTags(): Observable<any> {
        return this.http.get(API_ROOT + 'hot_tags', this.opts);
    }

    getCategories(): Observable<any> {
        return this.http.get(API_ROOT + 'categories', this.opts);
    }

    postRegister(body: any): Observable<any> {
        return this.http.post(API_ROOT + 'user/register', body, this.opts);
    }

    postLogin(body: any): Observable<any> {
        return this.http.post(API_ROOT + 'user/login', body, this.opts);
    }

    getLogout(): Observable<any> {
        const token: string = User.getUserToken();
        if (token == null || (token.trim().length < 1)) {
            return null;
        }

        this.opts.headers.set('Authorization', `Bearer ${token}`);
        return this.http.get(API_ROOT + 'user/logout', this.opts);
    }

    postCreateArticle(body: any): Observable<any> {
        const token: string = User.getUserToken();
        if (token == null || (token.trim().length < 1)) {
            return null;
        }
        this.opts.headers.set('Authorization', `Bearer ${token}`);
        return this.http.post(API_ROOT + 'articles', body, this.opts);
    }





}

