import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { ProjectEntry } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  @Input() isDark = false;
  myProjects: ProjectEntry[] = [];

  constructor(private portfolioApi: PortfolioApiService) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((data) => {
      if (data) this.myProjects = data.projects;
    });
  }

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }

  get pillClass() {
    return this.isDark ? 'pill' : 'light-pill';
  }
}
