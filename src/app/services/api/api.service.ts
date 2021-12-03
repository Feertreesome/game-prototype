import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(this.getUrl(path), { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(this.getUrl(path), body);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(path, body);
  }

  delete(path: string): Observable<Object> {
    return this.http.delete(this.getUrl(path));
  }

  private getUrl(urlOrPath: string) {
    let url = urlOrPath;

    if (!url.includes('http')) {
      url = 'neded URL';
      // url = environment.apiUrl + urlOrPath;
    }

    url += (url.indexOf('?') > -1 ? '&' : '?') + `v=${Date.now()}`;
    return url;
  }
}
