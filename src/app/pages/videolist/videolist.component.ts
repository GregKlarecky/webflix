import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.scss']
})
export class VideolistComponent implements OnInit {
  public page: number;
  constructor(public route: ActivatedRoute, public list: ListService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.page = +paramMap.get('page');
    });
  }

  trackByFn(index) {
    return index;
  }
}
