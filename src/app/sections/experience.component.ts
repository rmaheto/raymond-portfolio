import { Component } from '@angular/core';
import { experience } from '../data/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: 'experience.component.html'
})
export class ExperienceComponent {
  exp = experience;
}
