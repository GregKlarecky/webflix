import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from '../../interfaces/video.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public src: string;
  constructor(@Inject(MAT_DIALOG_DATA) public video: Video) {}

  ngOnInit(): void {}
}
