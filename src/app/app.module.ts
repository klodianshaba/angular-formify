import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormifyModule } from './formify/formify.module';
import {CustomModule} from './formify/custom/custom.module';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
