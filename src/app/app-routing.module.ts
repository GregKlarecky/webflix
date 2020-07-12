import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideolistComponent } from './pages/videolist/videolist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: VideolistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
