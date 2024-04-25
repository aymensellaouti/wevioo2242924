import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from '../cv/add-cv/add-cv.component';
import { CvComponent } from '../cv/cv/cv.component';
import { DetailsCvComponent } from '../cv/details-cv/details-cv.component';
import { ListCvsComponent } from '../cv/list-cvs/list-cvs.component';
import { listCvsResolver } from '../cv/resolvers/list-cvs.resolver';


export const CV_ROUTES: Routes = [
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'cv/list',
    component: ListCvsComponent,
    resolve: {
      cvs: listCvsResolver,
    },
    children: [{ path: ':id', component: DetailsCvComponent }],
  },
  { path: 'cv/add', component: AddCvComponent, canActivate: [authGuard] },
  { path: 'cv/:id', component: DetailsCvComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(CV_ROUTES)
  ],
  exports: [RouterModule]
})
export class CvRoutingModule { }
