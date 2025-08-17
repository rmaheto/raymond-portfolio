import { Component, type OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  implements OnInit{
 p = profile;
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle(this.p.seo.pageTitle);
    this.meta.updateTag({
      name: 'description',
      content: this.p.seo.description
    });
  }
}
