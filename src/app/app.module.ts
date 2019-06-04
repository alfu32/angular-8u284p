import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MoviesService } from './service/movies.service';

import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/effects/movie.effects';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  declarations: [ AppComponent, HelloComponent, MyCounterComponent, MoviesPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MoviesService]
})
export class AppModule { }
