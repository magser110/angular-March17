import { Component, input } from '@angular/core';
import { Books } from '../../shared/modeled/book';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  book = input<Books>()
}
