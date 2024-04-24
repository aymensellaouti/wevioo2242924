import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, delay, map, of, retry, share } from "rxjs";
import { TodoService } from "src/app/todo/service/todo.service";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]> = this.cvService.getCvs()
  .pipe(
    share(),
    retry({
      delay: 2000,
      count: 4
    }),
    catchError(() => {
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
          return of(this.cvService.getFakeCvs());
        },
    )
  );
  cvJuniors$ = this.cvs$.pipe(
    map(cvs => cvs.filter(cv => cv.age < 40))
  )
  cvSeniors$ = this.cvs$.pipe(
    map(cvs => cvs.filter(cv => cv.age >= 40))
  )
  selectedCv$: Observable<Cv> = this.cvService.selectCv$;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    private todoService: TodoService
  ) {
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: () => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`
    //       Attention!! Les données sont fictives, problème avec le serveur.
    //       Veuillez contacter l'admin.`);
    //   },
    // });
  }
}
