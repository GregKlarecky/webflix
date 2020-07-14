import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video.interface';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: Video[];
  public listStore: ReplaySubject<Video[]> = new ReplaySubject(1);
  constructor() {
    const listInit = this.getList();
    this.listStore.next(listInit);
  }

  private getList(): Video[] {
    const list = localStorage.getItem('videoList');
    this.list = JSON.parse(list) || [];
    return [...this.list];
  }

  private saveList(items: Video[]): void {
    const list = JSON.stringify(items);
    localStorage.setItem('videoList', list);
    this.listStore.next(this.list);
  }

  public addVideo(video: Video): void {
    const found = this.list.find(item => item.id === video.id);
    if (!found) {
      this.list = [...this.list, video];
      this.saveList(this.list);
    }
  }

  public removeVideo(video: Video): void {
    this.list = this.list.filter(item => item.id !== video.id);
    this.saveList(this.list);
  }
}
