import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { CertificationEntry, EducationEntry } from '../../models/portfolio.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
})
export class CertificationsComponent implements OnInit {
  @Input() isDark = false;
  certs: { certs: CertificationEntry[]; education: EducationEntry[] } = { certs: [], education: [] };

  constructor(private portfolioApi: PortfolioApiService) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((data) => {
      if (data) {
        this.certs = {
          certs: data.certifications,
          education: data.education,
        };
      }
    });
  }

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }
}
