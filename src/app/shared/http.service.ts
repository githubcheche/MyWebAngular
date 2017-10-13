import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'
import { Observable } from "rxjs/RX";
import 'rxjs/RX'

export const API_ROOT = 'http://api.icheyy.top/api/v1/';

@Injectable()
export class HttpService {

  headers: Headers = new Headers();
  opts: RequestOptions = new RequestOptions();


  constructor(private http: Http) {
    // this.dataSource = this.http.get('url').map((res)=>res.json); 
    this.getArticles().subscribe((data) => {
      if (data.json().state) {
        console.log(JSON.stringify(data));

      } else {

      }
    });
  }


  getArticles(): Observable<any> {
    return this.http.get(API_ROOT + 'articles', this.opts);
  }



}

