import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
const routes: Routes = [
  { path: "movies", component: MovieComponent },
  { path: "", component: NotfoundComponent },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

