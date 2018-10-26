import {Ibook} from './interfaces/ibook';

export class Book implements Ibook {
  id: number;
  author = '';
  title = '';
  isbn = '';
  pages = 0;
  countryId: number;
  cityId: number;
  companyId: number;
  formatId: number;
  description = '';
  price = 0;
}
