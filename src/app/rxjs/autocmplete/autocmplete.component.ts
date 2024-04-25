import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { CvService } from 'src/app/cv/services/cv.service';

@Component({
  selector: 'app-autocmplete',
  templateUrl: './autocmplete.component.html',
  styleUrls: ['./autocmplete.component.css']
})
export class AutocmpleteComponent {
  formbuilder = inject(FormBuilder);
  cvService = inject(CvService);
  form = this.formbuilder.group({
    name: ['']
  })
  cvs$ = this.name.valueChanges.pipe(
    filter(() => this.form.dirty),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((searchValue) => this.cvService.selectByName(searchValue) )
  )

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
}
