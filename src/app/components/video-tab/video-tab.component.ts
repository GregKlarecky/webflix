import { Component, Input } from '@angular/core';
import { Video } from '../../interfaces/video.interface';
import {
  faPlus,
  faMinus,
  faHeart,
  faPlay,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PlayerComponent } from '../player/player.component';
import { ListService } from '../../services/list.service';

MatDialogConfig;
@Component({
  selector: 'app-video-tab',
  templateUrl: './video-tab.component.html',
  styleUrls: ['./video-tab.component.scss']
})
export class VideoTabComponent {
  @Input() video: Video;
  public plus = faPlus;
  public play = faPlay;
  public minus = faMinus;
  public heart = faHeart;
  public spinner = faCircleNotch;

  constructor(private dialog: MatDialog, public list: ListService) {}

  playVideo() {
    this.dialog.open(PlayerComponent, { data: this.video });
  }
}
