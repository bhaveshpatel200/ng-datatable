import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgDataTableComponent } from './ng-datatable';
import { ColumnFilterComponent } from './column-filter';
import { ColumnHeaderComponent } from './column-header';
import { IconCheckComponent } from './icon-check';
import { IconDashComponent } from './icon-dash';
import { IconFilterComponent } from './icon-filter';
import { IconLoaderComponent } from './icon-loader';
import { IconCaretComponent } from './icon-caret';

// directive
import { SlotDirective } from './slot.directive';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        NgDataTableComponent,
        ColumnFilterComponent,
        ColumnHeaderComponent,
        IconCheckComponent,
        IconDashComponent,
        IconFilterComponent,
        IconLoaderComponent,
        IconCaretComponent,
        SlotDirective,
    ],
    exports: [NgDataTableComponent, ColumnFilterComponent, ColumnHeaderComponent, IconCheckComponent, IconDashComponent, IconFilterComponent, IconLoaderComponent, IconCaretComponent, SlotDirective],
})
export class DataTableModule {}
