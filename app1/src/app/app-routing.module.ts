import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: EmptyRouteComponent },
  // { path: '**', redirectTo: '' },
  { path: '**', component: EmptyRouteComponent },
  {path: 'about/', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [
  //   { provide: APP_BASE_HREF, useValue: '/' }
  // ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' + (window.location.pathname.split('/')[1] || '') }
  ],
})
export class AppRoutingModule { }
