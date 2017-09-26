import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticleList(): ArticleCard[] {
    let articleList: ArticleCard[] = [];
    for(let i=0; i<8; i++) {
      articleList.push(new ArticleCard(i,
        "MySQL—Schema 与数据类型优化" + i,
        "cheyy", "2017-09-17 10:19:38",
        "反范式的设计可以加快某些类型的查询，但是同时可能使另一些类型的查询变慢。比如添加计数表和汇总表是一种很好的优化查询方式，但这些表的维护成本可能会很高。MySQL独特的特性和实现细节对性能的影响也很大。 ...",
        "MySQL", 12, 10, 4));
      }

      return articleList;
  }

}


export class ArticleCard {
  constructor(
    public id:number,
    private title: string,
    private author: string,
    private time: string,
    private content: string,
    private lable: string,
    private checkNumber: number,
    private replies: number,
    private importance:number
  ) { }
}