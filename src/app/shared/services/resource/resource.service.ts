import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) {}

  getAll(resource: string, options?: any): Observable<any> {
    return this.http.get(`${environment.api}${resource}?${options}`).pipe(
      map(res => {
        return res;
      })
    );
  }

  getById(resource: string, id: any) {
    return this.http.get(`${environment.api}${resource}/${id}`);
  }

  post(resource: string, data: any) {
    return this.http.post(`${environment.api}${resource}`, data);
  }

  save(resource: string, data: any) {
    if (!data._id) {
      return this.http.post(`${environment.api}${resource}`, data);
    }else {
      return this.http.patch(`${environment.api}${resource}/${data._id}`, data);      
    }
  }

  delete(resource: string, id: any) {
    return this.http.delete(`${environment.api}${resource}/${id}`);
  }

}
