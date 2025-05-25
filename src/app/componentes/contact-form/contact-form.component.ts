import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContactService } from '../../servicios/contact.service';

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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log('id', id);

    if(id){
      this.contactService.listXid(parseInt(id))
        .subscribe(contact => (console.log('c', contact);
      ))
    }
  }

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
