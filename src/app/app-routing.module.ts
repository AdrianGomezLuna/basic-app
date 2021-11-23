import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listado',
    component: AllCharactersComponent
  },
  {
    path: 'search',
    component: CharacterSearchComponent
  },
  {
    path: 'detail/:id',
    component: CharacterDetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
