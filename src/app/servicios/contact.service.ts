import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../model/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);   //nueva forma de hacer inyeccion, no utiliza contructor

  //metodos
  list(){
    return this.http.get<Contact[]>('http://localhost:8080/api/contact');
  }

  listXid(id : number){
    return this.http.get<Contact>(`http://localhost:8080/api/contact/${id}`);
  }

  create(contact: any){
    return this.http.post<Contact>('http://localhost:8080/api/contact', contact);
  }

  update(contact: any, id : number){
    return this.http.put<Contact>(`http://localhost:8080/api/contact/${id}`, contact);
  }

  delete(id:number){
    return this.http.delete<void>(`http://localhost:8080/api/contact/${id}`);
  }

}
