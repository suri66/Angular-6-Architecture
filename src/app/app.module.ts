import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { CoreModule }     from './core/core.module';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,

    BrowserAnimationsModule,

    MatGridListModule,

    MatCardModule,

    MatMenuModule,

    MatIconModule,

    MatButtonModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
