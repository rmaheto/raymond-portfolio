import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: 'skill-card.component.html'
})
export class SkillCardComponent {
  @Input() title = '';
  @Input() items: string[] = [];
}
