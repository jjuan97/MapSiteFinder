import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiServerUrl = environment.backendApiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSiteById (id: number): Observable<Site>{
    return this.http.get<Site>(`${this.apiServerUrl}/sites/find/`+id);
  }

  public getAllSites (): Observable<Site[]>{
    return this.http.get<Site[]>(`${this.apiServerUrl}/sites/all`);
  }
}
