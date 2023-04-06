import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { content } from './helper-files/contenDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private contentUrl = 'api/content';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private log(message: string) {
    console.log(`AnimeService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getContentArray(): Observable<any[]> {
    this.messageService.add('Content array loaded!');
    return of(content);
  }

  getItemById(id: number): Observable<any> {
    const x = content.find(content => content.id === id);
    this.messageService.add(`Content item at id: ${id} retrieved!`);
    return of(x);
  }

  // addContent(content: any): Observable<any> {
  //   content.id = content.length + 1;
  //   content.push(content);
  //   this.messageService.add(`Content item with id ${content.id} added!`);
  //   return of(content);
  // }

  addContent({ title, description }: { title: string; description: string; }): Observable<Content> {
    const newContent: Content = {
      //id: null,
      title: title,
      description: description,
    };
    return this.http.post<Content>(this.contentUrl, newContent, this.httpOptions).pipe(
      tap((content: Content) => this.log(`added content with id ${content.id}`)),
      catchError(this.handleError<Content>('addContent'))
    );
  }

  updateContent(content: any): Observable<any> {
    const index = content.findIndex(content.id === content.id);
    content[index] = content;
    this.messageService.add(`Content item with id ${content.id} updated!`);
    return of(content);
  }

}
