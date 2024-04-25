import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";

import { RhComponent } from "./optimizationPattern/rh/rh.component";

import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rh', component: RhComponent },
    {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'word', component: MiniWordComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'color', component: ColorComponent }],
  },
  {path: 'todo', loadChildren: () => import('./todo/todo.module').then(
    m => m.TodoModule
  )}
  // { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
