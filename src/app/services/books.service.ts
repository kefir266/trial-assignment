import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Ibook} from '../interfaces/ibook';

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

  getBooks() {
    return this.http.get<Ibook[]>(`${environment.apiUrl}books`, httpOptions);
  }

  getBook(id) {
    return this.http.get<Ibook>(`${environment.apiUrl}books/${id}`, httpOptions)
      .pipe(res => {
        return res;
      });
  }
}
