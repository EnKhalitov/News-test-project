import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  apiKey = '6683958a04714bab9b59e89a95b5e2c4';
  
  constructor(private http: HttpClient) { }
  
  getArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + this.apiKey);
  }

  getArticleByID(source: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey' + this.apiKey);
  }
}