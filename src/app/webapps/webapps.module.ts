import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { WebappsRoutingModule } from './webapps-routing.module';
import { HomeComponent } from './content/home/home.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { CVComponent } from './content/cv/cv.component';
import { ContactComponent } from './content/contact/contact.component';
import { NavbarComponent } from './content/navbar/navbar.component';
import { FooterComponent } from './content/footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    CVComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WebappsRoutingModule
  ],
  providers: [

  ]
})
export class WebappsModule { }
