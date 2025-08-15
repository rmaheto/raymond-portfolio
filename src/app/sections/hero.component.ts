import { Component } from '@angular/core';
import { profile } from '../data/profile';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  p = profile;
}
