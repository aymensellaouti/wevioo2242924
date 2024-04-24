import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from 'src/config/routes.config';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnDestroy{
  formBuilder = inject(FormBuilder);
  form: FormGroup;
  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required, Validators.minLength(4)],
          asyncValidators: [],
          updateOn: 'change',
        },
      ],
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      job: ['', Validators.required],
      path: [''],
      age: [
        '',
        {
          validators: Validators.required,
          updateOn: 'blur',
        },
      ],
      cin: ['', Validators.required],
    });

    this.age.
      valueChanges.subscribe({
      next: (age) => {
        if(age < 18) {
          this.path.disable();
        }
        else {
          this.path.enable();
        }
      }
    })

    // this.form.statusChanges.pipe(
    //   filter(() => this.form.valid),
    //   tap(() => {
    //     localStorage.setItem('addCvForm', JSON.stringify(this.form.value));
    //   })
    // );

    const form = localStorage.getItem('addCvForm');
    if (form) {
      this.form.patchValue(JSON.parse(form));
    }
  }
  ngOnDestroy(): void {
    if(this.form.valid) {
      localStorage.setItem('addCvForm', JSON.stringify(this.form.value));
    }
  }

  get name() {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname')!;
  }
  get age() {
    return this.form.get('age')!;
  }
  get path() {
    return this.form.get('path')!;
  }
  get cin() {
    return this.form.get('cin')!;
  }
  get job() {
    return this.form.get('job')!;
  }

  addCv() {
    this.cvService.addCv(this.form.value).subscribe({
      next: () => {
        console.log('Removing CV form');
        this.form.reset();
        localStorage.removeItem('addCvForm');
        this.toaster.success(`Le cv a été ajouté avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      },
    });
  }
}
