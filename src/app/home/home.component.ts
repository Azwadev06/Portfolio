import { Component } from '@angular/core';
import { SocialIconsComponent } from "../social-icons/social-icons.component";

@Component({
  selector: 'app-home',
  imports: [SocialIconsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
