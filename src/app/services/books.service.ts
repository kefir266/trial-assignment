import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Ibook} from '../interfaces/ibook';
import {IsearchParams} from '../interfaces/isearch-params';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    [environment.authHeader]: environment.authToken
  }),
  params: new HttpParams()
};

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(searchParams: IsearchParams | null) {
    const params = searchParams ? this.getQueryStringParams(searchParams) : '';
    return this.http.get<Ibook[]>(`${environment.apiUrl}books${params}`, httpOptions);
  }

  getBook(id) {
    return this.http.get<Ibook>(`${environment.apiUrl}books/${id}`, httpOptions)
      .pipe(res => {
        return res;
      });
  }

  save(book) {
    if (book.id) {
      return this.http.put<Ibook>(`${environment.apiUrl}books/${book.id}`, book, httpOptions).pipe(
        res => {
          return res;
        });
    } else {
      return this.http.post<Ibook>(`${environment.apiUrl}books`, book, httpOptions).pipe(
        res => {
          return res;
        });
    }
  }

  getQueryStringParams(searchParams: IsearchParams) {
    let params = '?';
    params += searchParams.title ? `title_like=${searchParams.title}` : '';
    params += searchParams.author ? `author_like=${searchParams.author}` : '';
    params += searchParams.isbn ? `isbn_like=${searchParams.isbn}` : '';
    params += searchParams.formatId ? `formatId=${searchParams.formatId}` : '';
    params += searchParams.pagesMin ? `pages_gte=${searchParams.pagesMin}` : '';
    params += searchParams.pagesMax ? `pages_lte=${searchParams.pagesMax}` : '';
    params += searchParams.priceMin ? `price_gte=${searchParams.priceMin}` : '';
    params += searchParams.priceMax ? `price_lte=${searchParams.priceMax}` : '';
    return params;
  }
}
