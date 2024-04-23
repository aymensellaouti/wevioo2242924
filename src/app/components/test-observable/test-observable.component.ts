import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnDestroy {
  firstObservable$: Observable<number>;
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      const indexInterval = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(indexInterval);
        }
        observer.next(i--);
      }, 1000);
    });
    this.firstObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
      complete: () => {},
      error: (err) => {},
    });
    setTimeout(() => {
      this.firstObservable$
        .pipe(
          // 5 4 3 2 1
          map((element) => element * 3),
          // 15 12 9 6 3
          // filter((element) => element % 2 == 0)
        )
        .subscribe({
          next: (value) => this.toaster.info('' + value),
          complete: () => this.toaster.success('Fin du Game :)'),
        });
    }, 1500);
  }
  ngOnDestroy(): void {}
}
