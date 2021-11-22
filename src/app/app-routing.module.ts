import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';

const routes: Routes = [
 { path: 'about', component: AboutComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'profile', component: ProfileComponent },
 { path: 'research', component: ResearchComponent },
 { path: 'publications', component: PublicationsComponent },
 { path: 'presentations', component: PresentationsComponent },
 { path: 'teaching', component: TeachingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
