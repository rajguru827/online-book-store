import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BooksRoutingModule
  ],
  declarations: [BooksComponent, BookDetailsComponent],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
