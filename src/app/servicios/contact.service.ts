import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);   //nueva forma de hacer inyeccion, no utiliza contructor

  constructor() { }
}
