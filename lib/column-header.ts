import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { colDef } from './modals';

@Component({
    selector: 'column-header',
    template: `
        <ng-template #template>
            <tr>
                <th
                    *ngIf="all.hasCheckbox"
                    [class]="'bh-w-px'"
                    [ngClass]="{
                        'bh-sticky bh-bg-blue-light bh-z-[1]': all.stickyHeader || all.stickyFirstColumn,
                        'bh-top-0': all.stickyHeader,
                        'bh-left-0': all.stickyFirstColumn
                    }"
                >
                    <div class="bh-checkbox">
                        <input #selectedAll type="checkbox" (click)="selectAll.emit(selectedAll.checked); $event.stopPropagation()" />
                        <div>
                            <icon-check class="check"></icon-check>
                            <icon-dash class="intermediate"></icon-dash>
                        </div>
                    </div>
                </th>

                <ng-container *ngFor="let col of all.columns; let j = index">
                    <th
                        *ngIf="!col.hide"
                        [class]="'bh-select-none bh-z-[1]'"
                        [ngClass]="[
                            all.sortable && col.sort ? 'bh-cursor-pointer' : '',
                            j === 0 && all.stickyFirstColumn ? 'bh-sticky bh-left-0 bh-bg-blue-light' : '',
                            all.hasCheckbox && j === 0 && all.stickyFirstColumn ? 'bh-left-[52px]' : ''
                        ]"
                        [style]="{ width: col.width, 'min-width': col.minWidth, 'max-width': col.maxWidth }"
                    >
                        <div class="bh-flex bh-items-center" [ngClass]="[col.headerClass ? col.headerClass : '']" (click)="all.sortable && col.sort && sortChange.emit(col.field)">
                            {{ col.title }}
                            <span *ngIf="all.sortable && col.sort" class="bh-ml-3 bh-sort bh-flex bh-items-center" [ngClass]="[all.sortColumn, all.sortDirection]">
                                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                                    <polygon
                                        points="3.11,6.25 10.89,6.25 7,1.75"
                                        fill="currentColor"
                                        class="bh-text-black/20"
                                        [ngClass]="[all.sortColumn === col.field && all.sortDirection === 'asc' ? '!bh-text-primary' : '']"
                                    ></polygon>
                                    <polygon
                                        points="7,12.25 10.89,7.75 3.11,7.75"
                                        fill="currentColor"
                                        class="bh-text-black/20"
                                        [ngClass]="[all.sortColumn === col.field && all.sortDirection === 'desc' ? '!bh-text-primary' : '']"
                                    ></polygon>
                                </svg>
                            </span>
                        </div>

                        <ng-container *ngIf="all.columnFilter && !isFooter">
                            <div *ngIf="col.filter" class="bh-filter bh-relative">
                                <input *ngIf="col.type === 'string'" [(ngModel)]="col.value" type="text" class="bh-form-control" (keyup)="filterChange.emit()" />
                                <input *ngIf="col.type === 'number'" [(ngModel)]="col.value" type="number" class="bh-form-control" (keyup)="filterChange.emit()" />
                                <input *ngIf="col.type === 'date'" [(ngModel)]="col.value" type="date" class="bh-form-control" (change)="filterChange.emit()" />
                                <select *ngIf="col.type === 'bool'" [(ngModel)]="col.value" class="bh-form-control" (change)="filterChange.emit()" (click)="isOpenFilter = null">
                                    <option [ngValue]="undefined">All</option>
                                    <option [ngValue]="true">True</option>
                                    <option [ngValue]="false">False</option>
                                </select>

                                <button *ngIf="col.type !== 'bool'" type="button" (click)="toggleFilterMenu(col); $event.stopPropagation()">
                                    <icon-filter class="bh-w-4"></icon-filter>
                                </button>

                                <column-filter
                                    [ngClass]="{ 'bh-hidden': isOpenFilter !== col.field }"
                                    [column]="col"
                                    (close)="toggleFilterMenu()"
                                    (filterChange)="filterChange.emit()"
                                ></column-filter>
                            </div>
                        </ng-container>
                    </th>
                </ng-container>
            </tr>
        </ng-template>
    `,
})
export class ColumnHeaderComponent {
    @ViewChild('template', { static: true }) template: any;
    @ViewChild('selectedAll') selectedAll: any;

    @Input() all: any;
    @Input() isFooter: any;
    @Input() checkAll: any;

    @Output('selectAll') selectAll: EventEmitter<any> = new EventEmitter<any>();
    @Output('sortChange') sortChange: EventEmitter<any> = new EventEmitter<any>();
    @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>();

    isOpenFilter: any = null;

    constructor(private viewContainerRef: ViewContainerRef) {}

    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.checkboxChange();
    }

    checkboxChange() {
        if (this.selectedAll) {
            this.selectedAll.nativeElement.indeterminate = this.checkAll !== 0 ? !this.checkAll : false;
            this.selectedAll.nativeElement.checked = this.checkAll;
        }
    }

    toggleFilterMenu(col?: colDef) {
        if (col) {
            if (this.isOpenFilter === col.field) {
                this.isOpenFilter = null;
            } else {
                this.isOpenFilter = col.field;
            }
        } else {
            this.isOpenFilter = null;
        }
    }
}
