import { Component, OnInit, Input } from '@angular/core';
import {ArrayModel} from '../../../models';
import {ArrayControlComponent} from '../../../components/array-control/array-control.component';
import {AddressGroupControl} from '../../../groups/address.group-control';

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
  addAddress(): void {
    this.arrayModel.push(new AddressGroupControl());
  }
  delete(): void{
    this.arrayModel.removeAt(this.arrayModel.controls.length - 1 );
  }
}
