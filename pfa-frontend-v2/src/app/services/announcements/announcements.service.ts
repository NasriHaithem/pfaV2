import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Announcements } from 'src/app/models/announcements.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(private http: HttpClient) { }


  getAnnouncements():Observable<Announcements[]>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Announcements[]>("http://localhost:3000/announcements",  {headers: headers})
      .pipe(map( (res:Announcements[]) => res));
  }

  getOneAnnouncement(id: string):Observable<Announcements> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Announcements>(`http://localhost:3000/announcements/${id}`,  {headers: headers})
      .pipe(map( (res:Announcements) => res));
  }

}
