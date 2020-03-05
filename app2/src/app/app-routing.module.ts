import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'app2/about', component: AboutComponent },
  { path: 'app2/contact', component: ContactComponent },
  { path: '', redirectTo: 'app2/about', pathMatch: 'full' },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'  }
  ],
})
export class AppRoutingModule { }
