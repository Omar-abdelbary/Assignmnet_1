import { GraphicdesignComponent } from './graphicdesign/graphicdesign.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppsComponent } from './apps/apps.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" ,pathMatch:"full" , title:"home" , } ,
  {path:"home" , component:HomeComponent , title:"home"  } ,
  {path:"aboutus" , component: AboutusComponent , title:"aboutus"} ,
  {path:"skills" , component: SkillsComponent , title:"skills"} ,
  {path:"experience" , component: ExperienceComponent , title:"experience"} ,
  {path:"work" , component: WorkComponent , title:"work" , children:[
    {path:""  , redirectTo:"graphicdesign" , pathMatch:"full" , title:"graphicdesign"} ,
    {path:"graphicdesign"  , component: GraphicdesignComponent , title:"graphicdesign" } ,
    {path:"apps"  , component: AppsComponent , title:"apps" } ,
    {path:"software"  , component: SoftwareComponent , title:"software" } ,
  ]} ,
  {path:"**" , component: NotfoundComponent , title:"notfound"} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
