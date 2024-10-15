import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AthleteDataService {
  private apiUrl = 'http://localhost:8080/api/sportsmen';

  constructor(private http: HttpClient) {
  }

  getAthletes(page:number, size:number): Observable<any> {
    return this.http.request('GET',`${this.apiUrl}?page=${page}&size=${size}`, {responseType: "json"});
  }
}
