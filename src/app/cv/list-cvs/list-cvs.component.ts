import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-list-cvs',
  templateUrl: './list-cvs.component.html',
  styleUrls: ['./list-cvs.component.css'],
})
export class ListCvsComponent {
  cvs: Cv[] = [];
  router = inject(Router);
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  constructor() {
    this.cvs = this.acr.snapshot.data['cvs'];
    this.cvService.selectCv$
    .pipe(takeUntilDestroyed())
    .subscribe((selectedCv) => {
      this.router.navigate(['cv/list', selectedCv.id]);
    });
  }

}
