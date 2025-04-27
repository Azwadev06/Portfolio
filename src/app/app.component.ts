import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent, ProjectsComponent, ExperienceComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj';
}
