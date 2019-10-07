import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MozleyMainPanelComponent } from './mozley-main-panel/mozley-main-panel.component';

const routes: Routes = [
  {
    path: 'main',
    component: MozleyMainPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
