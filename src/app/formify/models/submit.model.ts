import {BehaviorSubject} from 'rxjs';
import {ThemePalette} from '@angular/material/core';
export class SubmitModel {
  text?: any;
  color?: ThemePalette;
  disabled?: boolean;
  loading?: boolean;
  status?: BehaviorSubject<boolean>;
  constructor() {
    this.text = 'Submit';
    this.color = 'primary';
    this.loading = false;
    this.disabled = false;
    this.status = new BehaviorSubject<boolean>(false);
  }
}
