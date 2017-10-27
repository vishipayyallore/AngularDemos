import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';

import { TourOfHeroesComponent } from './tourofheroes.component';

@NgModule({
  declarations: [
    TourOfHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [
    TourOfHeroesComponent
  ]
})
export class TourOfHeroesModule { }
