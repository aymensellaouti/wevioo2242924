import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { Observable, combineLatest, map, startWith, tap, timer } from 'rxjs';
import { API } from 'src/config/api.config';

export interface Image {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}


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
  http = inject(HttpClient);
  images$ = this.http.get<Image[]>(API.photos);
  paths$ = timer(0, 1000).pipe(
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 ...
    tap((data) => console.log('after timer : ' + data)),
    map((index) => this.paths[index % this.paths.length]),
    tap((data) => console.log('after map : ' + data)),
    startWith(this.paths[this.paths.length - 1])
    //'as.jpg',  'cv.png','rotating_card_profile.png',
  );
  imagesPaths$: Observable<string> = combineLatest([
    timer(0, 1000),
    this.images$,
  ]).pipe(map(([index, images]) => images[index % images.length].url));
}
