import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormifyModel} from '../../models';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'formify-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  @Input('formifyModel') formifyModel: FormifyModel;
  @Input('ngForm') ngForm: NgForm;
  @Output('submit') submit: EventEmitter<boolean> = new  EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {}
  onSubmit(): void {
    this.submit.next(true);
  }

}
