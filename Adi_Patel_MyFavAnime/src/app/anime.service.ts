import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from './helper-files/contenDb';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  getContentArray(): Observable<any[]> {
    return of(content);
  }

  getItemById(id: number): Observable<any> {
    content.find(content => content.id === id);
    return of(content);
  }

  constructor() { }
}
