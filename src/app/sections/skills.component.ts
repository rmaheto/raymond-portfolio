import { Component } from '@angular/core';
import { skills } from '../data/profile';
import { SkillCardComponent } from './skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: 'skills.component.html'
})
export class SkillsComponent {
  s = skills;
}
