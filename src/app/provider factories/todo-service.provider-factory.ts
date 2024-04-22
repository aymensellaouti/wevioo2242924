import { LoggerService } from "../services/logger.service";
import { TodoService } from "../todo/service/todo.service";

export const todoServiceProviderFactory = (): TodoService => {
  console.log('Rani ngénéri fel TodoService');

  return new TodoService();
}
