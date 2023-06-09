import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { colDef } from 'lib/modals';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [
        `
            .bh-table-responsive {
                min-height: 300px;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    cols: Array<colDef> = [];
    rows: Array<any> = [];
    loading = false;
    page = 1;
    pageSize = 10;
    search = '';
    sortColumn = '';
    sortDirection = '';
    hasCheckbox = true;
    isOpen = false;
    @ViewChild('datatable') datatable: any;
    constructor() {
        this.initData();
    }
    initData() {
        this.cols = [
            {
                field: 'id',
                title: 'ID',
                width: '90px',
                isUnique: true,
                cellRenderer: (params: any) => {
                    return '<strong>#' + params.id + '</strong>';
                },
            },
            { field: 'name', title: 'Name' },
            { field: 'username', title: 'Username' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'date', title: 'Date', type: 'date' },
            { field: 'active', title: 'Active', type: 'bool' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'address.city', title: 'Address' },
            { field: 'company.name', title: 'Company' },
        ];

        const arr = [];
        for (let i = 0; i < 5000; i++) {
            const obj = {
                id: 1 + i,
                name: 'Leanne Graham' + (i + 1),
                username: 'Bret' + (i + 1),
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
                date: 'Tue Sep 27 2022 22:19:57',
                age: i % 2 === 0 ? i + 2 : i + 4,
                active: i % 2 === 0 ? true : false,
            };
            arr.push(obj);
        }

        this.rows = arr;
    }
    rowClass(data: any) {
        return data.username === 'Bret - 0' ? 'Bret' : '';
    }
    cellClass(data: any) {
        return data.username === 'Bret - 0' ? 'Bret1' : '';
    }
}
