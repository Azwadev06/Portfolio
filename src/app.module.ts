import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { ProjectCardComponent } from './app/project-card/project-card.component';
import { SocialIconsComponent } from './app/social-icons/social-icons.component';
import { routes } from './app/app.routes';

NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectCardComponent,
   
    SocialIconsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }