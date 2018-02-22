import { Component, OnInit } from '@angular/core';

import { ArticleComponent } from '../models/article.data';

@Component({
    selector: 'app-articles',
    templateUrl: 'articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

    articles: Array<ArticleComponent> = [
        new ArticleComponent('Title 1', new Date(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'text'),
        new ArticleComponent('Title 2', new Date(), 'https://unsplash.it/340?image=10', 'image'),
        new ArticleComponent('Title 3', new Date(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'text'),
        new ArticleComponent('Title 4', new Date(), 'https://unsplash.it/340?image=20', 'image'),
        new ArticleComponent('Title 5', new Date(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'text'),
        new ArticleComponent('Title 6', new Date(), 'https://unsplash.it/340?image=30', 'image')
    ];

    constructor() { }

}
