import {Component, OnInit} from '@angular/core';
import {Tag} from "../../model/tag.model";
import {ArticleService} from "../../shared/article.service";

@Component({
    selector: 'app-hot-lable',
    templateUrl: './hot-lable.component.html',
    styleUrls: ['./hot-lable.component.css']
})
export class HotLableComponent implements OnInit {

    private tags: Tag[];

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        this.articleService.getHotTags((tags) => {
            this.tags = tags;
        });
    }

}
