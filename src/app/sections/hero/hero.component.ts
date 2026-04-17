import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { PortfolioProfile } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  p: PortfolioProfile | null = null;

  constructor(private portfolioApi: PortfolioApiService) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((data) => {
      if (data) this.p = data.profile;
    });
  }
}
