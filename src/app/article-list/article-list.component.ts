import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent, ArticleCard } from '../article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private articleList: ArticleCard[] = [];

  constructor() { }

  ngOnInit() {
    for(let i=0; i<10; i++) {
    this.articleList.push(new ArticleCard(i,
      "MySQL—Schema 与数据类型优化" + i,
      "cheyy", "2017-09-17 10:19:38",
      "反范式的设计可以加快某些类型的查询，但是同时可能使另一些类型的查询变慢。比如添加计数表和汇总表是一种很好的优化查询方式，但这些表的维护成本可能会很高。MySQL独特的特性和实现细节对性能的影响也很大。 ...",
      "MySQL", 12, 10, 4));
    }
    
  }

}


