import { Component, Inject } from '@angular/core';
import { todoInjectionToken } from './injection Tokens/todo.injection-token';
import { TodoService } from './todo/service/todo.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Starting Advanced Topics';
  constructor(
    private todoService: TodoService,
    @Inject('APP_LOGGER') private loggers: LoggerService[]
  ) {
    this.loggers.forEach(logger => logger.logger('cc'));
    this.todoService.logTodos();
  }
}
