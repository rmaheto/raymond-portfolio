import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from '../sections/about/about.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { CertificationsComponent } from '../sections/certifications/certifications.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { SkillsComponent } from '../sections/skills/skills.component';

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
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.route.data.subscribe(data => {
      if (data['scrollTo']) {
        setTimeout(() => {
          const el = document.getElementById(data['scrollTo']);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); // short delay to ensure DOM renders before scroll
      }
    });
  }
}
