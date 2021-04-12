import { Component, OnInit } from '@angular/core';
import {FieldModel, FieldTypes, FormifyModel, ValidatorModel} from '../../formify/models';
import {EmailFieldControl, LanguageFieldControl, NameFieldControl, PasswordFieldControl, ToggleFieldControl} from '../../formify/fields';
import {Validators} from '@angular/forms';
import {MatchConfirmPassword} from '../../formify/models/error-mathers.config';
import { Highlights } from '../highlights/highlights.component';

@Component({
  selector: 'formify-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  public collapse: boolean = true;
  public Highlights = Highlights;
  public formify = new FormifyModel({
    controls: [
      new EmailFieldControl(), // extends FieldModel
      new PasswordFieldControl(), // extends FieldModel
    ],
    submit: {text: 'Login'}, // submit button
  });
  constructor() {}
  ngOnInit(): void {
  }
  onSubmit(): void{
    this.formify.loading(true);
    setTimeout(() => {
      this.formify.loading(false);
    }, 1000);
  }
  onToggleCollapse(): void{
    this.collapse = !this.collapse;
  }

}
