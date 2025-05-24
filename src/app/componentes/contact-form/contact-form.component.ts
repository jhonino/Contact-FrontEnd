import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../../servicios/contact.service';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [RouterModule, ReactiveFormsModule],  //se importa el reactiveformsmodule para formularios reactivos
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  //inyectnado dependencias
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private contactService = inject(ContactService);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]]
  })

  create() {
    console.log(this.form.value)
    const contact = this.form.value;
    this.contactService.create(contact)
        .subscribe(() => {
            this.router.navigate(['/']);
        })
  }
}
