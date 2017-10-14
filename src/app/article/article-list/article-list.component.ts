import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../shared/article.service';
import {Article} from '../../model/article.model';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

    private articleList: Article[];

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {

        this.articleService.getArticleList((articles) => {
            console.log('articles:: ' + articles);
            this.articleList = articles;
        });
    }

}


