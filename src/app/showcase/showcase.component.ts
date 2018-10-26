import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {Observable} from 'rxjs/Observable';
import {Ibook} from '../interfaces/ibook';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html'
})
export class ShowcaseComponent implements OnInit {

  bookObs$: Observable<Ibook[]>;

  constructor(private bookService: BooksService, private router: Router,) { }

  ngOnInit() {
    this.bookObs$ = this.getBooks();
  }

  getBooks() {
    return this.bookService.getBooks();
  }

  openBook(book) {
    this.router.navigate([`book/${book.id}`]);
  }

}
