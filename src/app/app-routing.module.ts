import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MozleyMainPanelComponent } from './mozley-main-panel/mozley-main-panel.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'main',
    pathMatch: 'full' 
  },
  {
    path: 'main',
    component: MozleyMainPanelComponent,
  },
  {
    path: 'events',
    component: MozleyMainPanelComponent,
  },  
  {
    path: 'community',
    component: MozleyMainPanelComponent,
  },  
  {
    path: 'contact',
    component: MozleyMainPanelComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
