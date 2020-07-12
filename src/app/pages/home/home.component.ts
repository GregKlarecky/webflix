import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { Video } from '../../interfaces/video.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public searchValue: string;
  public disabled: boolean;
  public result: Observable<Video>;
  constructor(private search: SearchService) {}

  onEnter() {
    if (this.searchValue) {
      this.result = this.search.searchVideo(this.searchValue);
    }
  }
}
