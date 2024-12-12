import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Atualize a URL base para apontar para a porta correta do seu backend
const baseUrl = 'http://localhost:3000/api/';  // Substitua por sua URL real se for diferente

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any>{
    return this.http.get(baseUrl + url);
  }

  post(url: string, body: any): Observable<any>{
    return this.http.post(baseUrl + url, body);
  }

  put(url: string, body: any): Observable<any>{
    return this.http.put(baseUrl + url, body);
  }

  delete(url: string): Observable<any>{
    return this.http.delete(baseUrl + url);
  }
}