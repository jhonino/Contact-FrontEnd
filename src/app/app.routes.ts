import { Routes } from '@angular/router';

export const routes: Routes = [    
    {
        path: '',
        loadComponent:() => import('./componentes/contact-list/contact-list.component')
    }
];
