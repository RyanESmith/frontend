import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Entity } from './models/entity';

@Injectable({
  providedIn: 'root'
})
export class SpringDependentService {
  apiUrl = environment.SPRING_DEPDENDENT_API_URL+'/dependentEntity';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEntity(id: number):Observable<any> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get(url);
  }

  deleteEntity(id: number):Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  addEntity(entity: Entity): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post(url, entity);
  }

  updateEntity(entity:Entity): Observable<any> {
    const url = `${this.apiUrl}/${entity.id}`;
    return this.http.put(url, entity);
  }
}
