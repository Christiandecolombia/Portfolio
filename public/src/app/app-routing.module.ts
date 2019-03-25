import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } },
  { path: 'games', component: GamesComponent, data: { animation: 'Games' } },
  { path: 'contact', component: ContactComponent, data: {animation: 'Contact' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
