import { trigger, transition, style, animate } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0, 'margin-top': '-50px' }),
    animate('200ms', style({ opacity: 1, 'margin-top': 0 }))
  ]),
  transition(':leave', [
    animate('200ms', style({ opacity: 0, 'margin-top': '50px' }))
  ])
]);
