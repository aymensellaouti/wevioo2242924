import { AbstractControl, ValidationErrors } from "@angular/forms"
import { Observable, map, of } from "rxjs"
import { CvService } from "../cv/services/cv.service";

export const cinExistInCv = (cvService: CvService) => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return cvService
      .selectByProperty('cin', control.value)
      .pipe(
        map((cvs) =>
          cvs.length ? { cin: `Le cin ${control.value} existe déjà` } : null
        )
      );
  }
}
