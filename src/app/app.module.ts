import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material';
// angular material
// tslint:disable-next-line: max-line-length
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
