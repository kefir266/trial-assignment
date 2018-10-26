import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Icompany} from '../interfaces/icompany';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    [environment.authHeader]: environment.authToken
  })
};

@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies() {
    return this.http.get<Icompany[]>(`${environment.apiUrl}companies`, httpOptions)
      .pipe(res => {
        return res;
      });
  }
}
