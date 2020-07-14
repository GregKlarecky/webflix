import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../interfaces/video.interface';

@Pipe({
  name: 'pageNumber'
})
export class PagePipe implements PipeTransform {
  transform(pagination: Video[][], number: number): Video[] {
    return pagination ? pagination[number] : [];
  }
}
