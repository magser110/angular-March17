import { Component, signal } from '@angular/core';
import { BookItemComponent } from './book-item/book-item.component';
import { Books } from '../shared/modeled/book';

@Component({
  selector: 'app-favorite-books',
  imports: [BookItemComponent],
  templateUrl: './favorite-books.component.html',
  styleUrl: './favorite-books.component.css'
})
export class FavoriteBooksComponent {
  books = signal<Books[]>([
    {
      id: 'b1',
      name: 'name1',
      author: 'author1'
    },
    {
      id: 'b2',
      name: 'name2',
      author: 'author2'
    },
    {
      id: 'b3',
      name: 'name3',
      author: 'author3'
    }
  ])
}
