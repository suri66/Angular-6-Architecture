import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from '@app/shared/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  configUrl = 'http://localhost:3000/getTempSchedule';

  constructor(private http: HttpClient) {}

  getTask() {
    return this.http.get<Schedule[]>(this.configUrl);
  }

}
