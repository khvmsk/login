import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: 'http://localhost:3000/db'
  static apiUrl: any;
  constructor() { }
}
