import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'webapps', pathMatch: 'full' },
  {
    path: 'webapps',
    loadChildren: () => import('./webapps/webapps.module').then(m => m.WebappsModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }