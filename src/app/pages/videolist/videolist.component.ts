import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.scss']
})
export class VideolistComponent implements OnInit {
  constructor(public list: ListService) {}

  ngOnInit(): void {}
}
