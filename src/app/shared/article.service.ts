import {User} from './../model/user.model';
import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Article} from '../model/article.model';

/**
 * 文章api服务类
 */
@Injectable()
export class ArticleService {

    constructor(private http: HttpService) {
    }

    /**
     * 获取所有文章
     * @param callback
     */
    getArticleList(callback): void {

        this.http.getArticles().subscribe((data) => {
            if (data.json().status) {
                // console.log(JSON.stringify(data.json().data.data));
                let articleList: Article[] = data.json().data.data;
                // console.log(articleList[0]);
                callback(articleList);
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


