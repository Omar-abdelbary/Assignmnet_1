import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SoftwareComponent } from './software/software.component';
import { AppsComponent } from './apps/apps.component';
import { GraphicdesignComponent } from './graphicdesign/graphicdesign.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    NotfoundComponent,
    SoftwareComponent,
    AppsComponent,
    GraphicdesignComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule ,
    CarouselModule ,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
