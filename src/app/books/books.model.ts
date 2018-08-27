export interface Book {
  id: number;
  title: string;
  media_type: string;
  download_count: string;
  authors: Author [];
  bookshelves: [];
  languages: [];
  subjects: string;
}

export interface Author {
  birth_year: number;
  death_year: number;
  name: string;
}

export interface Books {
  books:  Book[];
}

export interface BooksGetResponse {
  count: number;
  next: string;
  previous: string;
  results: Book[];
}
