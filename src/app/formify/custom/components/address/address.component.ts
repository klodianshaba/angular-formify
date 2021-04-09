import { Component, OnInit, Input } from '@angular/core';
import {ArrayModel} from '../../../models';
import {ArrayControlComponent} from '../../../components/array-control/array-control.component';

@Component({
  selector: 'formify-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends ArrayControlComponent implements OnInit {
  constructor() { super(); }
  ngOnInit(): void {
    super.ngOnInit();
  }
}
