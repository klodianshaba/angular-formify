import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {InputComponent } from './components/input/input.component';
import {ControlComponent } from './components/control/control.component';
import {SelectComponent } from './components/select/select.component';
import {TextareaComponent } from './components/textarea/textarea.component';
import {FormifyComponent } from './components/formify/formify.component';
import {SubmitComponent} from './components/submit/submit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MaterialModule} from './material.module';
import {ToggleComponent} from './components/toggle/toggle.component';
import { RadioComponent } from './components/radio/radio.component';
import {MatRadioModule} from '@angular/material/radio';
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    ControlComponent,
    SubmitComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    SubmitComponent,
    FormifyComponent,
    ToggleComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
    MatRadioModule,
  ],
  exports: [
    ReactiveFormsModule,
    SubmitComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    ToggleComponent,
    RadioComponent
  ],
})
export class FormifyModule { }
