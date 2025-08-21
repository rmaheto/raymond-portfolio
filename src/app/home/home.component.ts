import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from '../sections/about/about.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { CertificationsComponent } from '../sections/certifications/certifications.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ThemeService } from '../services/theme.service';
import type { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  isDark = false;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute, public theme: ThemeService) {
    this.isDark = this.theme.isDark;
    this.sub = this.theme.isDark$.subscribe((v) => (this.isDark = v));
  }

  ngAfterViewInit() {
    this.route.data.subscribe((data) => {
      if (data['scrollTo']) {
        setTimeout(() => {
          const el = document.getElementById(data['scrollTo']);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
