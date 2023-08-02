import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HondaComponent } from './honda/honda.component';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [AppComponent, HondaComponent, HerosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'Honda', component: HondaComponent },
      { path: 'Heros', component: HerosComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
