import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemComponent } from './item/item.component';
import { ListCvsComponent } from './list-cvs/list-cvs.component';
import { ListComponent } from './list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CvRoutingModule } from '../cv-routing/cv-routing.module';
import { AutocmpleteComponent } from '../rxjs/autocmplete/autocmplete.component';



@NgModule({
  declarations: [
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    ListCvsComponent,
    AutocmpleteComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, CvRoutingModule],
})
export class CvModule {}
