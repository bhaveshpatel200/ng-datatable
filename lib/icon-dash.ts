import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'icon-dash',
    template: `
        <ng-template #template>
            <svg [ngClass]="class" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </ng-template>
    `,
})
export class IconDashComponent {
    @ViewChild('template', { static: true }) template: any;
    @Input() class: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
}
