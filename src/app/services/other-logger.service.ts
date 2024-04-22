import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OtherLoggerService {
  logger(something: any) {
    console.log('From Other Logger Service :');
    console.log(something);
  }
}
