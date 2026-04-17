import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { ExperienceEntry } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  @Input() isDark = false;
  exp: ExperienceEntry[] = [];

  constructor(private portfolioApi: PortfolioApiService) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((data) => {
      if (data) this.exp = data.experience;
    });
  }

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }
}
