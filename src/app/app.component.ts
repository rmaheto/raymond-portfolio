import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastContainerComponent } from "./shared/components/toast-container/toast-container.component";
import { profile, type Links } from './data/profile';

type LinkKey = keyof Links;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ToastContainerComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  p = profile;
  isDark = true;
  currentYear = new Date().getFullYear();

  socialLinks: { key: LinkKey; label: string }[] = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'github', label: 'GitHub' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'twitter', label: 'Twitter' },
    { key: 'instagram', label: 'Instagram' }
  ];

  constructor() {
    const saved = localStorage.getItem('theme');
    this.isDark = saved ? saved === 'dark' : true;
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  toggle() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }
}
