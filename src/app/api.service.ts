import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static API_Recipies_Url: any;
  API_Recipies_Url= 'http://localhost:3000/db'

  constructor( private httpclient:HttpClient) { }
  public getData(){
    return this.httpclient.get(this.API_Recipies_Url);
  }
}
