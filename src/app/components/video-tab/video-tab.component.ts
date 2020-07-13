import { Component, Input } from '@angular/core';
import { Video } from '../../interfaces/video.interface';
import {
  faPlus,
  faMinus,
  faHeart,
  faPlay,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
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
  public loading: boolean;

  playVideo() {
    this.loading = true;
  }
}
