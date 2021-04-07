import { Component } from '@angular/core';
import {FieldModel, FormifyModel} from './formify/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new FieldModel({controlName: 'name', label: 'enter name'})
    ]
  });
}
