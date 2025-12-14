import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Categories } from './categories/categories';
import { Grocery } from './grocery/grocery';
import { GroceryHub } from './grocery-hub/grocery-hub';

export const routes: Routes = [
    { path:'home', component:Home},
    { path:'about', component:About},
    { path:'contact', component:Contact},
    { path:'categories', component:Categories},
    { path:'grocery', component:Grocery},
    { path:'grocery-hub', component:GroceryHub},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
