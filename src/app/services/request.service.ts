import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from './../models/info.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  info: Info = new Info();
  constructor(private http: HttpClient) {}

  get(): Observable<Info[]> {
    return this.http.get<Info[]>('https://jsonplaceholder.typicode.com/posts');
  }

  post(info: Info): Observable<Info> {
    return this.http.post<Info>(
      'https://jsonplaceholder.typicode.com/posts',
      info
    );
  }
}
