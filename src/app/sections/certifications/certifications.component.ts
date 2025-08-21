import { Component, Input, input } from '@angular/core';
import { certifications } from '../../data/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
})
export class CertificationsComponent {
  @Input() isDark = false;
  certs = certifications;

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }
}
