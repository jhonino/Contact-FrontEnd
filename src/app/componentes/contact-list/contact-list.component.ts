import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../servicios/contact.service';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Contact } from '../../model/contact.interface';

@Component({
  //standalone: true,
  selector: 'app-contact-list',
  imports: [RouterModule, DatePipe], //el date pipe es para la fecha
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export default class ContactListComponent implements OnInit {



  //inyeccion de dependencia
  private contactService = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
     this.contactService.list()
      .subscribe(contacts => {
        this.contacts = contacts;
    });
  }

  deleteContact(contact: Contact){
    this.contactService.delete(contact.id).subscribe(() => {
      this.loadAll();
    })
  }

}
