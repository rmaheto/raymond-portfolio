import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experience } from '../../data/profile';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  @Input() isDark = false;
  exp = experience;

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }
}
