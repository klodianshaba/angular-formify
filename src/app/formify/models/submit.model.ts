import {BehaviorSubject} from 'rxjs';
export class SubmitModel {
  text?: any;
  color?: string;
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
