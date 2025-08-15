import { Component } from '@angular/core';
import { projects } from '../data/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], 
  templateUrl:'projects.component.html'
})
export class ProjectsComponent {
  ps = projects;
}
