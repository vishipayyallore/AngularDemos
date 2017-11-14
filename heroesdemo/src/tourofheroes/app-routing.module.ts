import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { TourOfHeroesComponent } from './heroeslist/tourofheroes.component';
import { Routes } from '@angular/router/src/config';

const routes: Routes = [
    { path: 'heros', component: TourOfHeroesComponent }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
