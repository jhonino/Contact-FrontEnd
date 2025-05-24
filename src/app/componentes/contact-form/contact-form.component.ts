import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [RouterModule, ReactiveFormsModule],  //se importa el reactiveformsmodule para formularios reactivos
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]]
  })

  create() {
    console.log(this.form.value)
  }
}
