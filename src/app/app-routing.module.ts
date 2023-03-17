import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRocketComponent } from './components/create-rocket/create-rocket.component';
import { DetailRocketComponent } from './components/detail-rocket/detail-rocket.component';
import { EditRocketComponent } from './components/edit-rocket/edit-rocket.component';
import { HomeComponent } from './components/home/home.component';
import { ListRocketComponent } from './components/list-rocket/list-rocket.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'rocketList', component: ListRocketComponent },
  { path: 'rocketCreate', component: CreateRocketComponent },
  { path: 'rocketEdit/:id', component: EditRocketComponent },
  { path: 'rocketDetail/:id', component: DetailRocketComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
