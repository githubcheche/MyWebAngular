import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleCard } from '../../shared/article.service';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article:ArticleCard;

  constructor(
     private router:Router 
  ) { }

  ngOnInit() {

    
  }

  goToAticleDetail() {
    this.router.navigate(['/article', this.article.id]);
  }

}


