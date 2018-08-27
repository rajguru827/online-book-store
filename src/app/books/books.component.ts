import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];
  selectedBook: Book;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService.getBooks().subscribe(data => {
      this.books = data.results;
    });
  }

  selectBook(book: any) {
    this.selectedBook = book;
  }
}
