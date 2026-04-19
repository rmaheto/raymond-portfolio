import { Component, OnDestroy } from '@angular/core';
import { AboutComponent } from '../../sections/about/about.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { CertificationsComponent } from '../../sections/certifications/certifications.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ThemeService } from '../../services/theme.service';
import type { Subscription } from 'rxjs';

@Component({
  selector: 'app-modern-theme',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificationsComponent,
    ContactComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-about [isDark]="isDark"></app-about>
    <app-skills [isDark]="isDark"></app-skills>
    <app-projects [isDark]="isDark"></app-projects>
    <app-experience [isDark]="isDark"></app-experience>
    <app-certifications [isDark]="isDark"></app-certifications>
    <app-contact [isDark]="isDark"></app-contact>
  `,
})
export class ModernThemeComponent implements OnDestroy {
  isDark = false;
  private sub?: Subscription;

  constructor(private theme: ThemeService) {
    this.isDark = this.theme.isDark;
    this.sub = this.theme.isDark$.subscribe((v) => (this.isDark = v));
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
