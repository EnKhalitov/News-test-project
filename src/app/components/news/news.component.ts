import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: Array<any>;
  constructor(private newsService: NewsService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit() {
    this.newsService.getArticles().subscribe(data => this.articles = data['articles']);
  }
  searchArticle(source) {
    this.newsService.getArticleByID(source).subscribe(data => this.articles = data['articles']);
  }
}