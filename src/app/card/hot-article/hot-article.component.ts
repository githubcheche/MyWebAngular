import {Component, OnInit} from '@angular/core';
import {Article} from '../../model/article.model';
import {ArticleService} from '../../shared/article.service';

@Component({
    selector: 'app-hot-article',
    templateUrl: './hot-article.component.html',
    styleUrls: ['./hot-article.component.css']
})
export class HotArticleComponent implements OnInit {

    private articleList: Article[];

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        this.articleService.getHotArticles((articles) => {
            this.articleList = articles;
        });
    }

}
