import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from '../../projects/store-lib/src/lib/store/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({
    counter: counterReducer
  }), provideEffects(),
  provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
 ]
};
