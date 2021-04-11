import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GroupControlComponent} from '../../../components/group-control/group-control.component';
@Component({
  selector: 'formify-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends GroupControlComponent implements OnInit {
  constructor() { super(); }
  ngOnInit(): void {
    super.ngOnInit();
  }
}
