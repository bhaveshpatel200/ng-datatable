import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'icon-filter',
    template: `
        <ng-template #template>
            <svg [ngClass]="class" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
        </ng-template>
    `,
})
export class IconFilterComponent {
    @ViewChild('template', { static: true }) template: any;
    @Input() class: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
}
