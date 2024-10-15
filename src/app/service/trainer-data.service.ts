import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerDataService {

  private apiUrl = 'http://localhost:8080/api/trainer';

  constructor(private http: HttpClient) {
  }

  getAthletes(): Observable<any> {
    return this.http.request('GET', this.apiUrl, {responseType: "json"});
  }

  getAthletesByTrainerId(page: number, size: number, id: number): Observable<any> {
    return this.http.request('GET', `${this.apiUrl}?page=${page}&size=${size}/${id}`, {responseType: "json"});
  }
}
