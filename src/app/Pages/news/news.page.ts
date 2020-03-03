import { NewsService } from './../../Service/news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNews('everything?q=bitcoin&from=2020-02-02&sortBy=publishedAt').subscribe(data => {
      this.data = data;
    });
  }
  goToArticle(article) {
    this.newsService.currentAricle = article;
    this.router.navigate(['/tabs/newsDetails']);
  }

}
