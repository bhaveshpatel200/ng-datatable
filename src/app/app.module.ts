import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DataTableModule } from '../../lib/ng-datatable.module';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule, FormsModule, DataTableModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
