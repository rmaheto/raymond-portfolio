import { Component } from '@angular/core';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
p=profile;
}
