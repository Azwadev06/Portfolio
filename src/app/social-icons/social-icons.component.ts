import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  imports: [NgFor],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.css'
})
export class SocialIconsComponent {
  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com' }
  ];

}
