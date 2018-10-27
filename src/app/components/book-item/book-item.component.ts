import {Component, Input, OnInit} from '@angular/core';
import {Ibook} from '../../interfaces/ibook';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Ibook;
  constructor() { }

  ngOnInit() {
  }
}
