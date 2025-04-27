import { Component, Input } from '@angular/core';
import { Project } from '../../project.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule,NgFor],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;

}
