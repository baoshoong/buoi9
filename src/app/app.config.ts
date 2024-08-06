import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-w24a-246',
        appId: '1:199431932841:web:d1843cb72897b34e1b12b8',
        storageBucket: 'fir-w24a-246.appspot.com',
        apiKey: 'AIzaSyB5bBn6gea19lEq9dKVkkFL30uIXHAL5VQ',
        authDomain: 'fir-w24a-246.firebaseapp.com',
        messagingSenderId: '199431932841',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
