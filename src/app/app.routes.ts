import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home - Raymond Aheto' },
    { path: 'about', component: HomeComponent, data: { scrollTo: 'about' }, title: 'About Me - Raymond Aheto' },
    { path: 'skills', component: HomeComponent, data: { scrollTo: 'skills' }, title: 'Skills - Raymond Aheto' },
    { path: 'projects', component: HomeComponent, data: { scrollTo: 'projects' }, title: 'Projects - Raymond Aheto' },
    { path: 'experience', component: HomeComponent, data: { scrollTo: 'experience' }, title: 'Experience - Raymond Aheto' },
    { path: 'certs', component: HomeComponent, data: { scrollTo: 'certs' }, title: 'Certifications - Raymond Aheto' },
    { path: 'contact', component: HomeComponent, data: { scrollTo: 'contact' }, title: 'Contact - Raymond Aheto' },
    { path: '**', redirectTo: '' }
];

