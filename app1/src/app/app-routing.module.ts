import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {path: 'app1',
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: '', redirectTo: 'app1/about', pathMatch: 'full' },
  { path: '**', component: EmptyRouteComponent }
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
