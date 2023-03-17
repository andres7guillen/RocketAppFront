import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RocketModel } from '../models/rocket.model';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private http: HttpClient, private conn: ConnectionService) { }

  getRocketById(id: string): Observable<any> {
    return this.http.get(this.conn.urlRocket + "/" + id);
  }

  getRockets(): Observable<any> {
    return this.http.get(this.conn.urlRocket);
  }

  deleteRocket(id?: string): Observable<any> {
    return this.http.delete(this.conn.urlRocket + '/' + id);
  }

  createRocket(rocket: RocketModel): Observable<any> {
    console.log(JSON.stringify(rocket));
    return this.http.post(this.conn.urlRocket, JSON.stringify(rocket),{headers: this.headers});
  }

  updateRocket(rocket: RocketModel):Observable<any>{
    return this.http.put(this.conn.urlRocket, JSON.stringify(rocket),{headers: this.headers});
  }

}
