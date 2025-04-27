import { Component } from '@angular/core';
import { Project } from '../../project.model';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Angular Routing Webpage',
      description: 'This is a course registration website where a customer can buy courses and register for them. It is a fully routes and responsive website made by Angular',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JAVA'],
      github: 'https://github.com/Azwadev06/Project-1.git',
      external : 'https://github.com/Azwadev06/Project-1.git',
      image: 'https://github.com/Azwadev06/Project-1.git',
      reverse: true
    },
    {
      title: 'Sample Portfolio',
      description: 'A fun Portfolio I created. Added fun colors and animations in it to make it look visually appealing.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Azwadev06/Sample-Portfolio.git',
      external:'https://github.com/Azwadev06/Sample-Portfolio.git',
      image: 'https://github.com/Azwadev06/Sample-Portfolio.git',
      reverse: true
    },
    
  ];

}
