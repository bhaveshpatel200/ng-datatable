import { TemplateRef, Directive, Input } from '@angular/core';

@Directive({
    selector: '[slot]',
})
export class SlotDirective {
    @Input('slot') fieldName: string;
    @Input('slotValue') value: any;

    constructor(public templateRef: TemplateRef<any>) {}
}
