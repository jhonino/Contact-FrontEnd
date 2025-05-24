import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../servicios/contact.service';

@Component({
  //standalone: true,
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export default class ContactListComponent implements OnInit {

  //inyeccion de dependencia
  private contactService = inject(ContactService);

  ngOnInit(): void {
    this.contactService.list().subscribe(contact => console.log(contact));
  }

}
