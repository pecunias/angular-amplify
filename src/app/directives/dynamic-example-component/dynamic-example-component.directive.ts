import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicExampleComponent]',
  standalone: true
})
export class DynamicExampleComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
