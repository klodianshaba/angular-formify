import { Component, OnInit, Input } from '@angular/core';
export enum Highlights {
  membership = 'membership',
  register = 'register',
  login = 'login'
}
export type HighlightType = Highlights.membership | Highlights.register | Highlights.login;
export class HighlightState {
  type: HighlightType;
  highlights: {
    label: string;
    language: string;
    code: string;
  }[];
}
@Component({
  selector: 'formify-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  code = `export class HighlightsComponent implements OnInit {
  @Input() highlight: HighlightType = Highlights.membership;
  @Input() collapse: boolean = true;
  @Input() json: object = {};
  constructor() { }
  ngOnInit(): void {}
}`;
  @Input() highlightType: HighlightType = Highlights.membership;
  @Input() collapse: boolean = true;
  @Input() json: object = {};
  public highlights: HighlightState[] = [
    {
      type: Highlights.membership,
      highlights: [
        {
        label: 'HTML',
        language: 'html',
        code: `<form class="formify" [formGroup]="formify.formGroup" #form="ngForm" (ngSubmit)="onSubmit()">
  <formify-input formControlName="firstName" [fieldModel]="formify.field('firstName')"></formify-input>
  <formify-input formControlName="lastName" [fieldModel]="formify.field('lastName')"></formify-input>
  <formify-select formControlName="language" [fieldModel]="formify.field('language')"></formify-select>
  <formify-textarea formControlName="biography" [fieldModel]="formify.field('biography')"></formify-textarea>
  <formify-toggle formControlName="toggleColor" [fieldModel]="formify.field('toggleColor')"></formify-toggle>
  <formify-radio formControlName="color" [fieldModel]="formify.field('color')"></formify-radio>
  <formify-exercises [groupModel]="formify.group('exercises')"></formify-exercises>
  <formify-radio formControlName="appearance" [fieldModel]="formify.field('appearance')"></formify-radio>
  <formify-address [arrayModel]="formify.array('address')"></formify-address>
  <formify-toggle formControlName="toggleContact" [fieldModel]="formify.field('toggleContact')"></formify-toggle>
  <formify-contact [groupModel]="formify.group('contact')"></formify-contact>
  <formify-submit [submit]="formify.submit"></formify-submit>
</form>`
        },
        {
          label: 'TS',
          language: 'ts',
          code: `export class MembershipComponent implements OnInit, OnDestroy {
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new NameFieldControl({}), // extends FieldModel
      new FieldModel({controlName: 'lastName', label: ' Enter last name', placeholder: 'last name'}),
      new LanguageFieldControl({}), // extends FieldModel
      new BiographyFieldControl({}), // extends FieldModel
      new ColorFieldControl({}), // extends FieldModel
      new AppearanceFieldControl(),
      new ToggleFieldControl({controlName: 'toggleColor', label: 'Show/Hidden choose color radios'}), // extends FieldModel
      new ArrayModel({controlName: 'address', label: 'Address:', controls: [
          new AddressGroupControl(), // extends GroupModel
        ]}),
      new ExercisesGroupControl(), // extends GroupModel
      new ToggleFieldControl({controlName: 'toggleContact', label: 'Add/Remove fill contact group'}), // extends FieldModel
      new ContactGroupControl(),
    ],
    submit: {text: 'Save Membership'},
  });
  constructor() {}
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.formify.unSubscribe();
  }
}`
        },
      ]
    },
    {
      type: Highlights.register,
      highlights: []
    },
    {
      type: Highlights.login,
      highlights: []
    }
  ];
  public get currentHighlight(): HighlightState{ return  this.highlights.find(highlight => highlight.type === this.highlightType); }
  constructor() { }
  ngOnInit(): void {}
}
