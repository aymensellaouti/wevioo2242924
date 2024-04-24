import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from 'src/config/routes.config';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
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
      age: ['', Validators.required],
      cin: ['', Validators.required],
    });
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
