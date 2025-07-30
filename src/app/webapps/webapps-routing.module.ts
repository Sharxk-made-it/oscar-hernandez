import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from "./content/content.component";
import { HomeComponent } from './content/home/home.component';
import { ProjectsComponent } from "./content/projects/projects.component";
import { CVComponent } from "./content/cv/cv.component";
import { ContactComponent } from './content/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'cv', component: CVComponent },
      { path: 'contact', component: ContactComponent },
    ]

  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class WebappsRoutingModule { }
