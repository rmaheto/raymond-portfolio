import { Component, Input, type OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { profile } from '../../data/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  p = profile;
  @Input() isDark = false;
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle(this.p.seo.pageTitle);
    this.meta.updateTag({
      name: 'description',
      content: this.p.seo.description,
    });
  }

  get cardClass() {
    return this.isDark ? 'card' : 'light-card';
  }
}
