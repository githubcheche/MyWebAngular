import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleService, ArticleCard } from '../../shared/article.service';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private articleList: ArticleCard[] = [];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {

    this.articleService.getArticleList((articles) => {
        console.log("articles:: " + articles);
        this.articleList = articles;
    });
  }

}


