import {Component} from '@angular/core';
import {zoomIn} from 'ngxa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    zoomIn({direction: 'Left', timings: '1000ms'}),
  ]
})
export class AppComponent {
  title = 'formify';
  constructor() {}
}
