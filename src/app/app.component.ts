import {Component} from '@angular/core';
import {roll} from 'ngxa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    roll({direction: 'In'})
  ]
})
export class AppComponent {
  title = 'formify';
  constructor() {}
}
