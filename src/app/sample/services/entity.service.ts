import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../../shared/models/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) { }

  getAll(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }

  getEntity(apiUrl: string, id: number):Observable<any> {
    const url = `${apiUrl}/${id}`
    return this.http.get(url);
  }

  deleteEntity(apiUrl: string, id: number):Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url);
  }

  addEntity(apiUrl: string, entity: Entity): Observable<any> {
    const url = `${apiUrl}`;
    return this.http.post(url, entity);
  }

  updateEntity(apiUrl: string, entity:Entity): Observable<any> {
    const url = `${apiUrl}/${entity.id}`;
    return this.http.put(url, entity);
  }
}
