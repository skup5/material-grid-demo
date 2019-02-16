import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentGridComponent } from './content-grid/content-grid.component';
import { ContentFlexComponent } from './content-flex/content-flex.component';

const routes: Routes = [
  { path: 'grid', component: ContentGridComponent },
  { path: 'flex', component: ContentFlexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
