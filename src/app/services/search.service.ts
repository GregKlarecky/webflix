import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { VideoResponse, Video } from '../interfaces/video.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private wordsToStrip: Array<string> = [
    'https://www.youtube.com/watch?v=',
    'https://youtu.be/'
  ];
  constructor(private api: ApiService) {}

  public searchVideo(input: string): Observable<Video> {
    const searchID: string = this.wordsToStrip
      .reduce((acc, cur) => {
        return acc.replace(cur, '');
      }, input)
      .split('&')[0];

    return this.api.getVideo(searchID).pipe(map(response => response.items[0]));
  }
}
