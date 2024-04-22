import { Component, Inject } from '@angular/core';
import { todoInjectionToken } from './injection Tokens/todo.injection-token';
import { TodoService } from './todo/service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Starting Advanced Topics';
  constructor(
    private todoService: TodoService
  ) {
    this.todoService.logTodos();
  }
}
