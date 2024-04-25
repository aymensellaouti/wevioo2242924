import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { canLeaveGuard } from "../common/can-leave.guard";


const TODO_ROUTES: Routes = [
  { path: 'todo', component: TodoComponent, canDeactivate: [canLeaveGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(TODO_ROUTES)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
