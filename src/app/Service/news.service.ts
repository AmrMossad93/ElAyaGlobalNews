import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  const API_URL = environment.apiURL;
  const API_KEY = environment.apiKey;
  currentAricle: any;
  constructor(private http: HttpClient) { }
  getNews(url) {
    return this.http.get(`${this.API_URL}/${url}&apiKey=${this.API_KEY}`);
  }
}
