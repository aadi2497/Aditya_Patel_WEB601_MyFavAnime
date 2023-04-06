import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { content } from './helper-files/contenDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private contentUrl = 'api/content';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContentArray(): Observable<any[]> {
    this.messageService.add('Content array loaded!');
    return of(content);
  }

  getItemById(id: number): Observable<any> {
    const x = content.find(content => content.id === id);
    this.messageService.add(`Content item at id: ${id} retrieved!`);
    return of(x);
  }

  addContent(content: any): Observable<any> {
    content.id = content.length + 1;
    content.push(content);
    this.messageService.add(`Content item with id ${content.id} added!`);
    return of(content);
  }

}
