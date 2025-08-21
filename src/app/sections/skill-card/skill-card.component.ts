import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input() title = '';
  @Input() items: string[] = [];
  @Input() isDark = false;

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }
  get pillClass() {
    return this.isDark ? 'pill' : 'light-pill';
  }
}
