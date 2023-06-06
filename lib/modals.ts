export class colDef {
    isUnique?: boolean;
    field: string;
    title?: string;
    value?: any;
    condition?: any;
    type?: string; // string|date|number|bool
    width?: string | undefined;
    minWidth?: string | undefined;
    maxWidth?: string | undefined;
    hide?: boolean;
    filter?: boolean; // column filter
    search?: boolean; // global search
    sort?: boolean;
    html?: boolean;
    cellRenderer?: any; // [Function, string]
    headerClass?: string;
    cellClass?: string;
}

export class Pager {
    public totalRows: number;
    public currentPage: number;
    public pageSize: number;
    public maxPage: number;
    public startPage: number;
    public endPage: number;
    public stringFormat: string;
    public pages: any;
}
