import { InjectionToken } from "@angular/core";
import { TodoService } from "../todo/service/todo.service";

export const todoInjectionToken = new InjectionToken<TodoService>('TodoInjectionToken');
