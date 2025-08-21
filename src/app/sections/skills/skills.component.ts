import { Component, Input } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { skills } from '../../data/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  mySkills = skills;
  @Input() isDark = false;
}
