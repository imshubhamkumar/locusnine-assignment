import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IAccount } from './account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8000/api/users';
  constructor(private http: HttpClient) { }

  getUsersDetails(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.url);
  }
}
