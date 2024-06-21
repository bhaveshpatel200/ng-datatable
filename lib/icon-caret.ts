import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'icon-caret',
    template: `
        <ng-template #template>
            <svg [ngClass]="class" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="0.3" fill="none" [attr.transform]="getTransform()">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                    fill="currentColor"
                ></path>
            </svg>
        </ng-template>
    `,
})
export class IconCaretComponent {
    @ViewChild('template', { static: true }) template: any;
    @Input() class: any;
    @Input() rotationAngle: number = 0;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
    getTransform() {
        return `matrix(1, 0, 0, 1, 0, 0) rotate(${this.rotationAngle})`;
    }
}
