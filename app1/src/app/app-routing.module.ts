import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: EmptyRouteComponent },
  // { path: '**', redirectTo: '' },
  // { path: '**', component: EmptyRouteComponent },
  {
    path: 'app1', component: AppComponent,
    // children: [{ path: 'about', component: AboutComponent}]
  },
  {path: 'app1/about', component: AboutComponent}
  // { path: '**', redirectTo: '' },
  // { path: '', pathMatch: 'full', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  // providers: [
  //   { provide: APP_BASE_HREF, useValue: '/' + (window.location.pathname.split('/')[1] || '') }
  // ],
})
export class AppRoutingModule { }
