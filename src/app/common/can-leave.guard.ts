import { CanDeactivateFn } from '@angular/router';
import { TodoComponent } from '../todo/todo/todo.component';
import {CanLeave} from './can-leave.interface';

export const canLeaveGuard: CanDeactivateFn<TodoComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (!component.canLeave()) {
    return confirm('Are you sure you want to leave');
  }
  return true;

};
