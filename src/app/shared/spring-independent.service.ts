import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SpringIndependentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.SPRING_INDEPENDENT_API_URL+'/independentEntity');
  }
}
