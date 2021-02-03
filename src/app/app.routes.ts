import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
];

export const Approutes = RouterModule.forRoot(routes);