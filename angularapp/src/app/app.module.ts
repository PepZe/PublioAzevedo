import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [MatSidenavModule, MatToolbarModule, MatToolbar],
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MatSidenavModule, MatToolbarModule, MatSlideToggleModule, MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
