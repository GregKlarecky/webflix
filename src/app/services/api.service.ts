import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiQueryBuilder } from '../helpers/api-query-builder.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getVideo(code: string) {
    const queryBuilder = new ApiQueryBuilder(
      code,
      ['snippet', 'statistics'],
      ['statistics', { name: 'snippet', items: ['title', 'thumbnails'] }]
    );
    return this.http.get(
      environment.youtubeDomain + 'videos' + queryBuilder.query
    );
  }
}
