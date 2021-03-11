export  class FormModel{
  public formGroup: any;
  public loading: boolean;
  public controls: any;
  public submit: any;
  public options: any;
  constructor(config: any ) {
    this.loading = false;
    this.controls = null;
    this.submit = null;
    this.options = null;
    this.formGroup = null;
  }
}
