import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';
import { LocalStorageAccessService } from './services/local-storage-access.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [LocalStorageAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
