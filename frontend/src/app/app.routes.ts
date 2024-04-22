import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FrameworkComponent } from './components/framework/framework.component';
import { PlayComponent } from './components/play/play.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home'},
    { path: 'create', component: CreateComponent, title: 'Create'},
    { path: 'play/:gameId', component: PlayComponent, title: 'Play'},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
