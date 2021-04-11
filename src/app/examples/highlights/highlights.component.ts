import { Component, OnInit, Input } from '@angular/core';
export enum Highlights {
  membership = 'membership',
  register = 'register',
  login = 'login'
}
export type HighlightType = Highlights.membership | Highlights.register | Highlights.login;
@Component({
  selector: 'formify-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  @Input() highlight: HighlightType = Highlights.membership;
  @Input() collapse: boolean = true;
  constructor() { }
  ngOnInit(): void {}
}
