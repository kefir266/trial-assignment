import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Icountry} from '../interfaces/icountry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    [environment.authHeader]: environment.authToken
  })
};

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Icountry[]>(`${environment.apiUrl}countries`, httpOptions)
      .pipe(res => {
        return res;
      });
  }

}
