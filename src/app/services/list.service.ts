import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video.interface';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: Video[];
  private pageSize: number = 4;
  public listStore: ReplaySubject<Video[][]> = new ReplaySubject(1);
  constructor() {
    this.getList();
  }

  public getList(): void {
    const list = localStorage.getItem('videoList');
    this.list = JSON.parse(list) || [];
    this.paginateAndShare(this.list);
  }

  private saveList(items: Video[]): void {
    const list = JSON.stringify(items);
    localStorage.setItem('videoList', list);
  }

  public addVideo(video: Video): void {
    const found = this.list.find(item => item.id === video.id);
    if (!found) {
      const stamped = { ...video, timestamp: this.stamp() };
      this.list = [...this.list, stamped];
      this.saveList(this.list);
      this.paginateAndShare(this.list);
    }
  }

  public removeVideo(video: Video): void {
    this.list = this.list.filter(item => item.id !== video.id);
    this.saveList(this.list);
    this.paginateAndShare(this.list);
  }

  public markFavourite(video: Video): void {
    const favourite = { ...video, favourite: true };
    this.list = this.list.map(item =>
      item.id === video.id ? favourite : item
    );
    this.saveList(this.list);
    this.paginateAndShare(this.list);
  }

  public filterFav() {
    const favs = this.list.filter(item => item.favourite);
    this.paginateAndShare(favs);
  }

  public sortFresh() {
    const fresh = this.list.sort((a, b) => b.timestamp - a.timestamp);
    this.paginateAndShare(fresh);
  }

  public sortOld() {
    const old = this.list.sort((a, b) => a.timestamp - b.timestamp);
    this.paginateAndShare(old);
  }

  private stamp(): number {
    return new Date().getTime();
  }

  public deleteAll(): void {
    localStorage.removeItem('videoList');
    this.getList();
  }

  private paginate(list): Video[][] {
    const copy = [...list];
    const pagination = [];
    while (copy.length > 0) {
      pagination.push(copy.splice(0, this.pageSize));
    }
    return pagination;
  }

  private paginateAndShare(list: Video[]) {
    const paginated = this.paginate(list);
    this.listStore.next(paginated);
  }
}
