import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experience } from '../../data/profile';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
exp = experience;
}
