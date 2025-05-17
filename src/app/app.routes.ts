import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', children: [
            {   path: '', 
                loadComponent: () => import(`./component/dashboard/dashboard.component`)
                    .then(mod => mod.DashboardComponent)
        },
            {
                path: 'about',
                loadComponent: () => import(`./pages/about/about.component`)
                    .then(mod => mod.AboutComponent)
            },
            {
                path: '404',
                loadComponent: () => import(`./pages/error/error.component`)
                    .then(mod => mod.ErrorComponent)
            },
            {
                path: '**',
                redirectTo: '404',
            },
        ]
    },
];
