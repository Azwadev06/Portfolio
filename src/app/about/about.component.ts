import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills: string[] = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Angular',
    'Python',
    'SQL Databases',
    'C++',
  ];

}
