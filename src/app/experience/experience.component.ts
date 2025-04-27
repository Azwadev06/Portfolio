import { Component } from '@angular/core';
import { Experience } from '../../experience.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule,NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: '@ItExtension',
      company: 'IT Extensions',
      title: 'Angular Developer',
      period: 'September 2024 - October 2024',
      responsibilities: [
        'Developed and implemented the complete front-end for the Kubona US e-commerce project at IT Extension using Angular, HTML, CSS, and JavaScript',

        'Conducted thorough manual testing across multiple browsers and mobile platforms to ensure cross-browser compatibility and responsiveness.',

       ' Collaborated closely with the team to integrate APIs and deliver a fully functional, client-ready e-commerce solution.',
        
      ]
    },
    {
      id: '@Clarisync',
      company: 'Clarisync',
      title: 'Angular Intern',
      period: 'July 2024 - September 2024',
      responsibilities: [
        'Gained hands-on experience in Angular development, contributing to the creation of dynamic, responsive web applications using Angular, TypeScript, HTML, and CSS.',

        'Collaborated with senior developers to implement key features, optimize performance, and improve overall user experience in Angular-based projects.',

        'Strengthened skills in component communication, services, and state management, actively participating in the development of scalable and maintainable applications.'
      ]
    },
    
  ];

  selectedTab = '@ItExtension';

  selectTab(tabId: string) {
    this.selectedTab = tabId;
  }

}
