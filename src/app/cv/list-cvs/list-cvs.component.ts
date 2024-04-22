import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-cvs',
  templateUrl: './list-cvs.component.html',
  styleUrls: ['./list-cvs.component.css'],
})
export class ListCvsComponent {
  cvs: Cv[] = [];
  router = inject(Router);
  acr = inject(ActivatedRoute);
  constructor() {
    this.cvs = this.acr.snapshot.data['cvs'];
  }
  showDetails(cv: Cv) {
    this.router.navigate(['cv/list',cv.id]);
    // this.selectedCv = cv;
  }
}
