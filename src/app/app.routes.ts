import { Routes } from '@angular/router';
import { TodosComponent } from './my-components/todos/todos.component';
import { AboutComponent } from './my-components/about/about.component';
import { ContactComponent } from './my-components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },  
    { path: 'contact', component: ContactComponent }    
];
