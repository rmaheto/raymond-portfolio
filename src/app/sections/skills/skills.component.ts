import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { skills } from '../../data/profile';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
mySkills =skills;
}
