import { Component } from '@angular/core';
import { profile } from '../data/profile';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
  p = profile;
  submit() { alert('Thanks! (Wire this to a backend or Formspree when ready)'); }
}
