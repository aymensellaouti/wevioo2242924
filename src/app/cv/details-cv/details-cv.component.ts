import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from '../../../config/routes.config';
import { AuthService } from '../../auth/services/auth.service';
import { EMPTY, Observable, catchError, map, switchMap, tap } from 'rxjs';



@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv$: Observable<Cv | null> = this.activatedRoute.params.pipe(
    map(params => params['id']),
    switchMap((id => this.cvService.getCvById(id))),
    catchError((err) => {
       this.router.navigate([APP_ROUTES.cv]);
       return EMPTY;
    })
  );
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    // Khtha l'id mel snapshot de l'activatedRoute
    // cv$ = this.activatedRoute.params.subscribe(
    //   params => {
    //     console.log('Ya sayed fama route jdida tsaref :D');
    //     console.log({params});
    //     this.cvService.getCvById(+params['id']).subscribe({
    //       next: (cv) => {
    //         this.cv = cv;
    //       },
    //       error: (e) => {
    //         this.router.navigate([APP_ROUTES.cv]);
    //       },
    //     });
    //   }
    //);
    // Mcha lel CvService ou 9alou jib le cv d'id id

  }
  deleteCv(cv: Cv) {
    this.cvService.deleteCvById(cv.id).pipe(
      tap(() => {
            this.toastr.success(`${cv.name} supprimé avec succès`);
            this.router.navigate([APP_ROUTES.cv]);
      }),
      catchError(() => {
          this.toastr.error(`Problème avec le serveur veuillez
          contacter l'admin`);
          return EMPTY;
      })
    ).subscribe();
  }
}
