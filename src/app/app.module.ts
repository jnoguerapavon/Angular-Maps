import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        MapsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
