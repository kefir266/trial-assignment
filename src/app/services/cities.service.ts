import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Icity} from '../interfaces/icity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    [environment.authHeader]: environment.authToken
  })
};
@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get<Icity[]>(`${environment.apiUrl}cities`, httpOptions)
      .pipe(res => {
        return res;
      });
  }
}
