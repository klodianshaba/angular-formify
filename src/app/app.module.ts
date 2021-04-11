import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormifyModule } from './formify/formify.module';
import {CustomModule} from './formify/custom/custom.module';
import {MaterialModule} from './formify/material.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormifyModule,
    CustomModule,
    MaterialModule,
    NgxJsonViewerModule,
    HighlightModule,
    HighlightPlusModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
