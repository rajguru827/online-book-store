import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
