import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cvs',
  templateUrl: './list-cvs.component.html',
  styleUrls: ['./list-cvs.component.css'],
})
export class ListCvsComponent {
  cvs: Cv[] = [];
  router = inject(Router);

  constructor(
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    });
    this.toastr.info('Bienvenu dans notre CvTech');
  }
  showDetails(cv: Cv) {
    this.router.navigate(['cv/list',cv.id]);
    // this.selectedCv = cv;
  }
}
