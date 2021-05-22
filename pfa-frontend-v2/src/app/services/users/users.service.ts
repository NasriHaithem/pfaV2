import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from 'src/app/models/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getMyClients(id: string):Observable<User[]>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<User[]>(`http://localhost:3000/users/clients/${id}`,  {headers: headers})
      .pipe(map( (res:User[]) => res));
  }
}
