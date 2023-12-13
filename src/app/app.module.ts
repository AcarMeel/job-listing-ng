import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobCardComponent } from './job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    JobListComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
