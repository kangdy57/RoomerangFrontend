import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../models/constants';
import { Wohngemeinschaft } from '../models/wg';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WohngemeinschaftService {

  constructor(private http: HttpClient) { }

  getWohngemeinschaft(): Observable<Wohngemeinschaft[]>  {
    return this.http.get<Wohngemeinschaft[]>(baseURL + 'wg');
  }
}
