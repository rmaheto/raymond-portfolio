import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../data/profile';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() isDark = false;
  myProjects = projects;

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }

  get pillClass() {
    return this.isDark ? 'pill' : 'light-pill';
  }
}
