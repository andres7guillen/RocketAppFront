import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public urlRocket:string = 'https://localhost:7276/api/Rocket';

  constructor(){}
}
