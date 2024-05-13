import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideNativeDateAdapter(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-52b74","appId":"1:795737469775:web:d4b3794e8ecf5a0d874b3a","storageBucket":"simple-crm-52b74.appspot.com","apiKey":"AIzaSyAipQQ_otAoaDtPCF3Og7CdKMqR89XB9Zg","authDomain":"simple-crm-52b74.firebaseapp.com","messagingSenderId":"795737469775"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
