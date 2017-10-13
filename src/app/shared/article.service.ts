import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ArticleService {

  private articles: any;
  constructor(private http: HttpService) { }

  getArticleList(callback): void {
    let articleList: ArticleCard[] = [];

    this.http.getArticles().subscribe((data) => {

      if (data.json().status) {
        // console.log(JSON.stringify(data.json().data.data));
        articleList = data.json().data.data;
        // console.log(articleList[0]);
        callback(articleList as ArticleCard[]);
      } 
    });


    // for (let i = 0; i < 8; i++) {
    //   articleList.push(new ArticleCard(i,
    //     "MySQL—Schema 与数据类型优化" + i,
    //     "cheyy", "2017-09-17 10:19:38",
    //     "反范式的设计可以加快某些类型的查询，但是同时可能使另一些类型的查询变慢。比如添加计数表和汇总表是一种很好的优化查询方式，但这些表的维护成本可能会很高。MySQL独特的特性和实现细节对性能的影响也很大。 ...",
    //     "MySQL", 12, 10, 4));
    // }

    
  }

}


export class ArticleCard {

    public id: number;
    private title: string;
    // private author: string;
    private user: User;
    private time: string;
    // private content: string;
    private body: string;
    private lable: string;
    private view_count: number;
    private comments_count: number;
    private importance: number;

}