import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PythonDataComponent } from './python-data/python-data.component';
import { DataServiceService } from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PythonDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
