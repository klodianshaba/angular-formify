# Angular-formify

Angular library to generate forms dynamically by having the ability to customize, manipulate and scale it easy.

## Quick Links

[Demo](https://klodianshaba.github.io/angular-formify/)

## Main offers by Angular Formify 🚀
✔ FormifyModel to generate and manipulate a form.\
✔ Control Models: FieldModel, GroupModel, ArrayModel and ValidatorModel.\
✔ Control Components: FieldControl, GroupControl, ArrayControl.\
✔ Reusable Components: Input, Textarea, Select, Radio, Toggle and Checkbox.\
✔ Creating Custom Component just by extending one of Control Components.\
✔ Creating Custom Control by extending one of Control Models.

## Formify model generate and manipulate a form

Simply can be generated by passing config FormifyState parameter.

``` Typescript
public formify = new FormifyModel({
  controls: [ // controls config
    new FieldModel(config),
    new GroupModel(config),
    new ArrayModel(config),
  ],
  submit: config, // submit button config,
  options: config, // options config
});
```

Accessibility and manipulation by calling functions and instance variables.

``` Typescript
this.formify.field('color').update({hidden: false });
this.formify.group('contact');
this.formify.array('addresses');
this.formify.loading(true);
this.formify.formGroup.get('color').valueChanges.subscribe(color => { // handle color change
  this.formify.updateFields({color});
  this.formify.updateSubmit({color});
});
this.formify.addControl(new FieldModel());
this.formify.removeControl('name');
this.formify.reset();
this.formify.unSubscribe();
```

## Control Models

Make it possible to configure and generate from controls as you need.
Offers accessibility and manipulation.\
Generate Control FieldModel instance

``` Typescript
new FieldModel({
  controlName: 'email',
  label: 'Email address',
  placeholder: 'email',
  icon: 'email',
  autoComplete: 'off',
  validators: [
    new ValidatorModel({
        validator: Validators.required, errorCode: 'required',
        description: 'identity is required'
    }),
    new ValidatorModel({
        validator: Validators.pattern(EmailRegex),
        errorCode: 'pattern',
        description: 'Email address is incorrect'
    }),
    new ValidatorModel({
        validator: null, errorCode: 'exist',
        description: 'This email exist in database'
    }),
  ]
});
```

Control GroupModel and ArrayModel can be generated in same way just passing controlName and Controls

```Typescript
const ContactGroupModel = new GroupModel({
  controlName: 'contact',
  label: 'Contact',
  controls: [
    new PhoneFieldControl(overwrite), // extends by FieldModel
    new EmailFieldControl(overwrite), // extends by FieldModel
    new FieldModel(config)
  ]
});

const AdressArrayModel = new ArrayModel({
  controlName: 'addresses', label: 'Address:',
  controls: [ 
     ContactGroupModel,ContactGroupModel 
   ]
});
```

## Control Components

Supporting ControlValueAccessor for using nested forms.\
Getting control model and generating nested formGroup.\
Offering functions for accessing datasource and validation errors.

## Reusable Components

Input, Textarea, Select, Radio, Toggle and Checkbox that are extends from FieldControlComponent. So easy you can create another reusable component by extending one of Control Components

## Creating Custom Components

```Typescript
export class CustomFieldComponent extends FieldControlComponent implements OnInit , OnChanges{
  constructor(protected formBuilder: FormBuilder) {   
     super(formBuilder); }
  ngOnChanges(changes: SimpleChanges):void {
     super.ngOnChanges(changes); 
  }
  ngOnInit(): void {super.ngOnInit(); }
}
export class CustomGroupComponent extends GroupControlComponent implements OnInit {
  constructor() { super(); }
  ngOnInit(): void {
    super.ngOnInit();
  }
}
```

## Creating Custom Controls

```Typescript
export class ColorFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'color',
      fieldType: FieldTypes.radio,
      label: 'Color',
      defaultValue: 'primary',
      options: [
        {text: 'Primary', value: 'primary'},
        {text: 'Accent', value: 'accent'},
        {text: 'Warn', value: 'warn'}]
    });
    super(Object.assign(field , overwrite));
  }
}
export class ContactGroupControl extends GroupModel {
  constructor(overwrite: GroupState  = {}) {
    const  group: GroupModel = new GroupModel({
      controlName: 'contact',
      label: 'Contact:',
      controls: [ config controls ]
    });
    super(Object.assign(group , overwrite));
  }
}
```

## Displaying in Template
Support two ways to displaying the form in template.

1. Using Formify component and passing FormifyModel.
2. 
```Html
<formify [formify]="formify" (submit)="onSubmit()"></formify>
```

2. Custom displaying by including reusable/custom components and passing ControlModel manually.

```Html
<form [formGroup]="formify.formGroup" (ngSubmit)="onSubmit()">
   <formify-input formControlName="firstName"   
      [fieldModel]="formify.field('firstName')">
   </formify-input>
   <formify-select formControlName="languages" 
      [fieldModel]="formify.field('languages')">
   </formify-select>
   <formify-textarea formControlName="biography" 
      [fieldModel]="formify.field('biography')">
   </formify-textarea>
   <formify-addresses [arrayModel]="formify.array('address')">  
   </formify-addresses>
   <formify-contact [groupModel]="formify.group('contact')"> 
   </formify-contact>
   <formify-submit [submit]="formify.submit"></formify-submit>
</form>
```

## Running Demo

```
npm install
npm start
```



