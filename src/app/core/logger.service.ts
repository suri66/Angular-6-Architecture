import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg: any) {
    console.log(new Date() + ": "
    + JSON.stringify(msg));
  }
}
