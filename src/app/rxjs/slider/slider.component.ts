import { Component, Input } from '@angular/core';
import { map, startWith, tap, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() timer = 1000;
  @Input() size = 150;
  @Input()
  paths = [
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  paths$ = timer(0, 1000).pipe(
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 ...
    tap((data) => console.log(data)),
    map((index) => this.paths[index % this.paths.length]),
    tap((data) => console.log(data)),
    startWith(this.paths[this.paths.length - 1])

    //'as.jpg',  'cv.png','rotating_card_profile.png',
  );
}
