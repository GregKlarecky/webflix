import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable, of } from 'rxjs';
import { Video } from '../../interfaces/video.interface';
import { fade } from '../../animations/fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fade]
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

  public onAdding() {
    this.result = of(undefined);
  }
}
