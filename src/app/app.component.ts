import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { ToastContainerComponent } from "./shared/components/toast-container/toast-container.component";
import { profile, type Links } from './data/profile';
import { filter } from 'rxjs/operators';

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
export class AppComponent implements OnInit {
  p = profile;
  isDark = true;
  currentYear = new Date().getFullYear();

  socialLinks: { key: LinkKey; label: string }[] = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'github', label: 'GitHub' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'x', label: 'X' },
    { key: 'instagram', label: 'Instagram' }
  ];

  constructor(private router: Router) {
    const saved = localStorage.getItem('theme');
    this.isDark = saved ? saved === 'dark' : true;
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = 'https://raymond-aheto.com' + this.router.url;

      // Remove existing canonical
      let existing = document.querySelector("link[rel='canonical']");
      if (existing) {
        existing.setAttribute("href", currentUrl);
      } else {
        const link: HTMLLinkElement = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', currentUrl);
        document.head.appendChild(link);
      }
    });
  }

  toggle() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }
}
