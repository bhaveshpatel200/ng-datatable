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
        // this.rows = [
        //     {
        //         id: 1,
        //         name: 'Leanne Graham',
        //         username: 'Bret',
        //         email: 'Sincere@april.biz',
        //         address: {
        //             street: 'Kulas Light',
        //             suite: 'Apt. 556',
        //             city: 'Gwenborough',
        //             zipcode: '92998-3874',
        //             geo: {
        //                 lat: '-37.3159',
        //                 lng: '81.1496',
        //             },
        //         },
        //         phone: '1-770-736-8031 x56442',
        //         website: 'hildegard.org',
        //         company: {
        //             name: 'Romaguera-Crona',
        //             catchPhrase: 'Multi-layered client-server neural-net',
        //             bs: 'harness real-time e-markets',
        //         },
        //         date: 'Tue Sep 27 2022 22:19:57',
        //         active: true,
        //         age: 10,
        //     },
        //     {
        //         id: 2,
        //         name: 'Ervin Howell',
        //         username: 'Antonette',
        //         email: 'Shanna@melissa.tv',
        //         address: {
        //             street: 'Victor Plains',
        //             suite: 'Suite 879',
        //             city: 'Wisokyburgh',
        //             zipcode: '90566-7771',
        //             geo: {
        //                 lat: '-43.9509',
        //                 lng: '-34.4618',
        //             },
        //         },
        //         phone: '010-692-6593 x09125',
        //         website: 'anastasia.net',
        //         company: {
        //             name: 'Deckow-Crist',
        //             catchPhrase: 'Proactive didactic contingency',
        //             bs: 'synergize scalable supply-chains',
        //         },
        //         date: '2022-09-22',
        //         active: false,
        //         age: 20,
        //     },
        //     {
        //         id: 3,
        //         name: 'Clementine Bauch',
        //         username: 'Samantha',
        //         email: 'Nathan@yesenia.net',
        //         address: {
        //             street: 'Douglas Extension',
        //             suite: 'Suite 847',
        //             city: 'McKenziehaven',
        //             zipcode: '59590-4157',
        //             geo: {
        //                 lat: '-68.6102',
        //                 lng: '-47.0653',
        //             },
        //         },
        //         phone: '1-463-123-4447',
        //         website: 'ramiro.info',
        //         company: {
        //             name: 'Romaguera-Jacobson',
        //             catchPhrase: 'Face to face bifurcated interface',
        //             bs: 'e-enable strategic applications',
        //         },
        //         date: '2022-04-10T10:20:25',
        //         active: true,
        //         age: 25,
        //     },
        //     {
        //         id: 4,
        //         name: 'Patricia Lebsack',
        //         username: 'Karianne',
        //         email: 'Julianne.OConner@kory.org',
        //         address: {
        //             street: 'Hoeger Mall',
        //             suite: 'Apt. 692',
        //             city: 'South Elvis',
        //             zipcode: '53919-4257',
        //             geo: {
        //                 lat: '29.4572',
        //                 lng: '-164.2990',
        //             },
        //         },
        //         phone: '493-170-9623 x156',
        //         website: 'kale.biz',
        //         company: {
        //             name: 'Robel-Corkery',
        //             catchPhrase: 'Multi-tiered zero tolerance productivity',
        //             bs: 'transition cutting-edge web services',
        //         },
        //     },
        //     {
        //         id: 5,
        //         name: 'Chelsey Dietrich',
        //         username: 'Kamren',
        //         email: 'Lucio_Hettinger@annie.ca',
        //         address: {
        //             street: 'Skiles Walks',
        //             suite: 'Suite 351',
        //             city: 'Roscoeview',
        //             zipcode: '33263',
        //             geo: {
        //                 lat: '-31.8129',
        //                 lng: '62.5342',
        //             },
        //         },
        //         phone: '(254)954-1289',
        //         website: 'demarco.info',
        //         company: {
        //             name: 'Keebler LLC',
        //             catchPhrase: 'User-centric fault-tolerant solution',
        //             bs: 'revolutionize end-to-end systems',
        //         },
        //         age: 56,
        //     },
        //     {
        //         id: 6,
        //         name: 'Mrs. Dennis Schulist',
        //         username: 'Leopoldo_Corkery',
        //         email: 'Karley_Dach@jasper.info',
        //         address: {
        //             street: 'Norberto Crossing',
        //             suite: 'Apt. 950',
        //             city: 'South Christy',
        //             zipcode: '23505-1337',
        //             geo: {
        //                 lat: '-71.4197',
        //                 lng: '71.7478',
        //             },
        //         },
        //         phone: '1-477-935-8478 x6430',
        //         website: 'ola.org',
        //         company: {
        //             name: 'Considine-Lockman',
        //             catchPhrase: 'Synchronised bottom-line interface',
        //             bs: 'e-enable innovative applications',
        //         },
        //     },
        //     {
        //         id: 7,
        //         name: 'Kurtis Weissnat',
        //         username: 'Elwyn.Skiles',
        //         email: 'Telly.Hoeger@billy.biz',
        //         address: {
        //             street: 'Rex Trail',
        //             suite: 'Suite 280',
        //             city: 'Howemouth',
        //             zipcode: '58804-1099',
        //             geo: {
        //                 lat: '24.8918',
        //                 lng: '21.8984',
        //             },
        //         },
        //         phone: '210.067.6132',
        //         website: 'elvis.io',
        //         company: {
        //             name: 'Johns Group',
        //             catchPhrase: 'Configurable multimedia task-force',
        //             bs: 'generate enterprise e-tailers',
        //         },
        //         age: 67.35,
        //     },
        //     {
        //         id: 8,
        //         name: 'Nicholas Runolfsdottir V',
        //         username: 'Maxime_Nienow',
        //         email: 'Sherwood@rosamond.me',
        //         address: {
        //             street: 'Ellsworth Summit',
        //             suite: 'Suite 729',
        //             city: 'Aliyaview',
        //             zipcode: '45169',
        //             geo: {
        //                 lat: '-14.3990',
        //                 lng: '-120.7677',
        //             },
        //         },
        //         phone: '586.493.6943 x140',
        //         website: 'jacynthe.com',
        //         company: {
        //             name: 'Abernathy Group',
        //             catchPhrase: 'Implemented secondary concept',
        //             bs: 'e-enable extensible e-tailers',
        //         },
        //     },
        //     {
        //         id: 9,
        //         name: 'Glenna Reichert',
        //         username: 'Delphine',
        //         email: 'Chaim_McDermott@dana.io',
        //         address: {
        //             street: 'Dayna Park',
        //             suite: 'Suite 449',
        //             city: 'Bartholomebury',
        //             zipcode: '76495-3109',
        //             geo: {
        //                 lat: '24.6463',
        //                 lng: '-168.8889',
        //             },
        //         },
        //         phone: '(775)976-6794 x41206',
        //         website: 'conrad.com',
        //         company: {
        //             name: 'Yost and Sons',
        //             catchPhrase: 'Switchable contextually-based project',
        //             bs: 'aggregate real-time technologies',
        //         },
        //     },
        //     {
        //         id: 10,
        //         name: 'Clementina DuBuque',
        //         username: 'Moriah.Stanton',
        //         email: 'Rey.Padberg@karina.biz',
        //         address: {
        //             street: 'Kattie Turnpike',
        //             suite: 'Suite 198',
        //             city: 'Lebsackbury',
        //             zipcode: '31428-2261',
        //             geo: {
        //                 lat: '-38.2386',
        //                 lng: '57.2232',
        //             },
        //         },
        //         phone: '024-648-3804',
        //         website: 'ambrose.net',
        //         company: {
        //             name: 'Hoeger LLC',
        //             catchPhrase: 'Centralized empowering task-force',
        //             bs: 'target end-to-end models',
        //         },
        //     },
        // ];

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
