import { Routes } from '@angular/router';
import ContactListComponent from './componentes/contact-list/contact-list.component';
import { ContactFormComponent } from './componentes/contact-form/contact-form.component';

export const routes: Routes = [    
    {
        path: '',
        component: ContactListComponent
    },
    {
        path: 'new',
        component: ContactFormComponent
    }
];


/*----------------------------------------------------------------------------------------
// Lazy loading
{
  path: '',
  loadComponent: () => import('./componentes/contact-list/contact-list.component')
}

// Sin lazy loading
import { ContactListComponent } from './componentes/contact-list/contact-list.component';

{
  path: '',
  component: ContactListComponent
}


ademas de ello en el componente debe activarse como true si deseas utilizar el LazyLoading
------------------------------------------------------------------------------------------*/