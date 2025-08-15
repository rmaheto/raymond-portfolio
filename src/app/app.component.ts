import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero.component';
import { AboutComponent } from './sections/about.component';
import { SkillsComponent } from './sections/skills.component';
import { ProjectsComponent } from './sections/projects.component';
import { ExperienceComponent } from './sections/experience.component';
import { CertificationsComponent } from './sections/certifications.component';
import { ContactComponent } from './sections/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    HeroComponent, AboutComponent, SkillsComponent,CommonModule,
    ProjectsComponent, ExperienceComponent, CertificationsComponent, ContactComponent
  ],
  template: `
  <div [class.dark]="isDark" class="min-h-screen bg-white dark:bg-[var(--bg)]">
    <header class="sticky top-0 z-40 backdrop-blur bg-[#0f172a]/70 border-b border-white/5">
  <nav class="container-xl h-14 flex items-center justify-between">
    <a href="#" class="text-lg font-semibold text-white/90">RA</a>

    <div class="hidden md:flex gap-8 text-sm">
      <a href="#about" class="text-slate-300 hover:text-white/90 transition">About</a>
      <a href="#skills" class="text-slate-300 hover:text-white/90 transition">Skills</a>
      <a href="#projects" class="text-slate-300 hover:text-white/90 transition">Projects</a>
      <a href="#experience" class="text-slate-300 hover:text-white/90 transition">Experience</a>
      <a href="#certs" class="text-slate-300 hover:text-white/90 transition">Certs</a>
      <a href="#contact" class="text-slate-300 hover:text-white/90 transition">Contact</a>
    </div>

    <button (click)="toggle()" aria-label="Toggle theme"
      class="rounded-full p-2 border border-white/10 text-white/80 hover:bg-white/5">
      <span *ngIf="!isDark">🌙</span><span *ngIf="isDark">☀️</span>
    </button>
  </nav>
</header>


    <main class="max-w-6xl mx-auto px-4">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
    </main>

    <footer class="mt-16 py-10 text-center text-sm text-slate-500 dark:text-[var(--muted)]">
      © 2024 Raymond Aheto. Built with passion for clean code and great user experiences.
    </footer>
  </div>
  `
})
export class AppComponent {
  isDark = true;

  constructor() {
    // initial: honor saved preference or default to dark
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
