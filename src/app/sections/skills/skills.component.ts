import { Component, Input, OnInit } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../services/portfolio-api.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit {
  mySkills: Record<string, string[]> = {};
  @Input() isDark = false;

  constructor(private portfolioApi: PortfolioApiService) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((data) => {
      if (data) this.mySkills = data.skills;
    });
  }
}
