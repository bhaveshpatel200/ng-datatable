import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'column-filter',
    template: `
        <div class="bh-filter-menu bh-absolute bh-z-[1] bh-bg-white bh-shadow-md bh-rounded-md bh-top-full bh-right-0 bh-w-32 bh-mt-1">
            <div class="bh-text-[13px] bh-font-normal bh-rounded bh-overflow-hidden" (click)="closeMethod(); $event.stopPropagation()">
                <button type="button" [class.active]="column.condition === ''" (click)="select('')">No filter</button>
                <ng-container *ngIf="column.type === 'string'">
                    <button type="button" [class.active]="column.condition === 'contain'" (click)="select('contain')">Contain</button>
                    <button type="button" [class.active]="column.condition === 'not_contain'" (click)="select('not_contain')">Not contain</button>
                    <button type="button" [class.active]="column.condition === 'equal'" (click)="select('equal')">Equal</button>
                    <button type="button" [class.active]="column.condition === 'not_equal'" (click)="select('not_equal')">Not equal</button>
                    <button type="button" [class.active]="column.condition === 'start_with'" (click)="select('start_with')">Starts with</button>
                    <button type="button" [class.active]="column.condition === 'end_with'" (click)="select('end_with')">Ends with</button>
                </ng-container>
                <ng-container *ngIf="column.type === 'number'">
                    <button type="button" [class.active]="column.condition === 'equal'" (click)="select('equal')">Equal</button>
                    <button type="button" [class.active]="column.condition === 'not_equal'" (click)="select('not_equal')">Not Equal</button>
                    <button type="button" [class.active]="column.condition === 'greater_than'" (click)="select('greater_than')">Greater than</button>
                    <button type="button" [class.active]="column.condition === 'greater_than_equal'" (click)="select('greater_than_equal')">Greater than or equal</button>
                    <button type="button" [class.active]="column.condition === 'less_than'" (click)="select('less_than')">Less than</button>
                    <button type="button" [class.active]="column.condition === 'less_than_equal'" (click)="select('less_than_equal')">Less than or equal</button>
                </ng-container>
                <ng-container *ngIf="column.type === 'date'">
                    <button type="button" [ngClass]="{ active: column.condition === 'equal' }" (click)="select('equal')">Equal</button>
                    <button type="button" [ngClass]="{ active: column.condition === 'not_equal' }" (click)="select('not_equal')">Not equal</button>
                    <button type="button" [ngClass]="{ active: column.condition === 'greater_than' }" (click)="select('greater_than')">Greater than</button>
                    <button type="button" [ngClass]="{ active: column.condition === 'less_than' }" (click)="select('less_than')">Less than</button>
                </ng-container>

                <button type="button" [ngClass]="{ active: column.condition === 'is_null' }" (click)="select('is_null')">Is null</button>
                <button type="button" [ngClass]="{ active: column.condition === 'is_not_null' }" (click)="select('is_not_null')">Not null</button>
            </div>
        </div>
    `,
})
export class ColumnFilterComponent {
    @Input() column: any;
    @Output('close') close: EventEmitter<any> = new EventEmitter<any>();
    @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>();
    constructor() {}

    ngOnInit() {
        document.addEventListener('click', this.closeMethod.bind(this));
    }

    ngOnDestroy() {
        document.removeEventListener('click', this.closeMethod.bind(this));
    }

    closeMethod() {
        this.close.emit();
    }

    select(condition: any) {
        this.column.condition = condition;
        if (condition === '') {
            this.column.value = '';
        }

        this.filterChange.emit(this.column);
    }
}
