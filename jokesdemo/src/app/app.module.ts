import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule,
  MatInputModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatSlideToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { FooterComponent } from './reusables/footer/footer.component';
import { JokeListComponent } from './JokeListComponent/jokelist.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JokeComponent,
    JokeListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
