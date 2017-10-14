import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../model/article.model';


@Component({
    selector: 'app-article-card',
    templateUrl: './article-card.component.html',
    styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

    @Input() article: Article;

    constructor(private router: Router) {
    }

    ngOnInit() {


    }

    goToAticleDetail() {
        this.router.navigate(['/article', this.article.id]);
    }

}


