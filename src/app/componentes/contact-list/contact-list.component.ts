import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../servicios/contact.service';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

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

  contacts: any[] = [];

  ngOnInit(): void {
    this.contactService.list()
    .subscribe((contacts: any) => {
      this.contacts = contacts;
    });
  }

}
