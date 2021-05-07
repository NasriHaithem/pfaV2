import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deals } from 'src/app/models/deals.model';
import { User } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private http: HttpClient) { }
  getDealById(id: String):Observable<Deals>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Deals>(`http://localhost:3000/deals/${id}`, {headers: headers})
    .pipe(map( (res:Deals) => res));
  }

  getUserDeals(id: string):Observable<Deals[]>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Deals[]>(`http://localhost:3000/deals/owner/${id}`, {headers: headers})
    .pipe(map( (res:Deals[]) => res));
  }
  getBuyerInfo(id: string):Observable<User>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<User>(`http://localhost:3000/users/${id}`, {headers: headers})
    .pipe(map( (res: User) => res));
  }
}
