import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Iformat} from '../interfaces/iformat';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    [environment.authHeader]: environment.authToken
  })
};

@Injectable()
export class FormatsService {

  constructor(private http: HttpClient) { }

  getFormats() {
    return this.http.get<Iformat[]>(`${environment.apiUrl}formats`, httpOptions)
      .pipe(res => {
        return res;
      });
  }
}
