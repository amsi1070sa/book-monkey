import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api4.angular-buch.com';

  //books: Book[];

  constructor(private http: HttpClient) {
    // this.books = [
    //   {
    //     isbn: '9783864907791',
    //     title: 'Angular',
    //     authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
    //     published: new Date(2020, 8, 1),
    //     subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices',
    //     rating: 5,
    //     thumbnails: [
    //       {
    //         url: 'https://ng-buch.de/angular-cover.jpg',
    //         title: 'Buchcover'
    //       }
    //     ],
    //     description: 'Lernen Sie Angular mit diesem Praxisbuch!'
    //   },
    //   {
    //     isbn: '9783864905520',
    //     title: 'React',
    //     authors: [' Oliver Zeigermann', 'Nils Hartmann'],
    //     published: new Date(2019, 11, 12),
    //     subtitle: 'Grundlagen, fortgeschrittene Techniken und Praxistipps',
    //     rating: 3,
    //     thumbnails: [
    //       {
    //         url: 'https://ng-buch.de/react-cover.jpg',
    //         title: 'Buchcover'
    //       }
    //     ],
    //     description: 'Das bewährte und umfassende Praxisbuch zu React.'
    //   }
    // ];
  }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.api}/book/${isbn}`);
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`, {responseType: 'text'});
  }
}
