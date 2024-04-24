import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, map, take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnDestroy {
  firstObservable$: Observable<number>;
  subscription = new Subscription() ;
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
    this.subscription.add(this.firstObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
      complete: () => {},
      error: (err) => {},
    }));
    setTimeout(() => {
      this.subscription.add(this.firstObservable$
        .pipe(
          // 5 4 3 2 1
          map((element) => element * 3),
          // 15 12 9 6 3
          filter((element) => element % 2 == 0),
          // 12 6,
          take(1)
        )
        .subscribe({
          next: (value) => this.toaster.info('' + value),
          complete: () => this.toaster.success('Fin du Game :)'),
        }));
    }, 1500);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
