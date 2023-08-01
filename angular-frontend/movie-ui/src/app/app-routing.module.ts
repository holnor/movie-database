import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {CreateMovieComponent} from "./components/create-movie/create-movie.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {LoginComponent} from "./components/login/login/login.component";

const routes: Routes = [
  {path: 'movie-list', component:MovieListComponent},
  {path: 'create-movie', component:CreateMovieComponent},
  {path: 'movie-details/:id', component:MovieDetailsComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: '**', redirectTo: '/movie-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
