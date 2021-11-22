import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { ContactComponent } from './contact/contact.component';
import { TeachingComponent } from './teaching/teaching.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ResearchComponent,
    PublicationsComponent,
    PresentationsComponent,
    ContactComponent,
    TeachingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
