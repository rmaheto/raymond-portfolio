import { Component, type OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  implements OnInit{

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('About Me - Raymond Aheto');
    this.meta.updateTag({
      name: 'description',
      content: 'Senior Software Engineer specializing in Java, Spring Boot, AWS cloud migration, and secure API development.'
    });
  }
}
