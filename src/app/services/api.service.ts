import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiQueryBuilder } from '../helpers/api-query-builder.helper';
import { Observable } from 'rxjs';
import { VideoResponse } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getVideo(code: string): Observable<VideoResponse> {
    const queryBuilder = new ApiQueryBuilder(
      code,
      ['snippet', 'statistics'],
      [
        ,
        'id',
        'statistics',
        { name: 'snippet', items: ['title', 'thumbnails'] }
      ]
    );
    return this.http.get<VideoResponse>(
      environment.youtubeDomain + 'videos' + queryBuilder.query
    );
  }
}
