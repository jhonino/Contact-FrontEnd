import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContactService } from '../../servicios/contact.service';
import { Contact } from '../../model/contact.interface';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [RouterModule, ReactiveFormsModule],  //se importa el reactiveformsmodule para formularios reactivos
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {

  //inyectnado dependencias
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute); 
  private contactService = inject(ContactService);

  form?: FormGroup;
  contact? : Contact;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log('id', id);

    if(id){
      this.contactService.listXid(parseInt(id))
        .subscribe(contact => {
          this.contact = contact;
          this.form = this.fb.group({
              name: [contact.name, [Validators.required]],
              email: [contact.email, [Validators.required]]
          });
        })
    } else {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]]
      });
    }
  }


  save() {    
    console.log(this.form!.value) 
    const contactForm = this.form!.value; //el formulario va exisitr siempre que ingrese a este fomulario
    
    if(this.contact){
      this.contactService.update(this.contact.id, contactForm)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.contactService.create(contactForm)
        .subscribe(() => {
            this.router.navigate(['/']);
        });
    }    
  }
}
