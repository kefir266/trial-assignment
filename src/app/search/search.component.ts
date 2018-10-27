import { Component, OnInit } from '@angular/core';
import {FormatsService} from '../services/formats.service';
import {Iformat} from '../interfaces/iformat';
import {Icity} from '../interfaces/icity';
import {BooksService} from '../services/books.service';
import {Observable} from 'rxjs/Observable';
import {Ibook} from '../interfaces/ibook';
import {IsearchParams} from '../interfaces/isearch-params';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  formats: Iformat[];
  bookObs$: Observable<Ibook[]>;
  searchParams: IsearchParams = {};

  constructor(private formatService: FormatsService, private bookService: BooksService) { }

  ngOnInit() {
    this.getBooks();
    this.formatService.getFormats().subscribe( (res: Icity[]) => {
        this.formats = res;
      }
    );
  }

  getBooks() {
    this.bookObs$ = this.bookService.getBooks(this.searchParams);
  }

}
