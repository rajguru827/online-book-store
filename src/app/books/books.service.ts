import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BooksGetResponse } from './books.model';

@Injectable()
export class BooksService {

  private apiURL = 'http://skunkworks.ignitesol.com:8000/books';

  constructor(
    private httpClient: HttpClient
  ) { }

  getBooks() {
    return this.httpClient
    .get<BooksGetResponse>(this.apiURL)
    .pipe(map(res => {
      return res;
    }));
  }

}
