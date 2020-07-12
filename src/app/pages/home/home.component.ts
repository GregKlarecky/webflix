import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public searchValue: string;
  public disabled: boolean;
  constructor(private search: SearchService) {}

  onEnter() {
    if (this.searchValue) {
      this.search.searchVideo(this.searchValue).subscribe(console.log);
    }
  }
}
