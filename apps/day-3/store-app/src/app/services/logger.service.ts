import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LoggerService {
  log(message: any) {
    console.log('LoggerService.log() ->', message);
    // code to access the server to save message
  }
}
