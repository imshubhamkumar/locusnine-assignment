import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'pages'
  }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, config)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }