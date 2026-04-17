import { Component, Input, type OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { PortfolioProfile } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  p: PortfolioProfile | null = null;
  @Input() isDark = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private portfolioApi: PortfolioApiService
  ) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((data) => {
      if (data) {
        this.p = data.profile;
        this.title.setTitle('About Me - ' + data.profile.name);
        this.meta.updateTag({ name: 'description', content: data.profile.blurb });
      }
    });
  }

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }
}
