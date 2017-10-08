import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MdPaginator, MdSort } from '@angular/material';



export class TableDataSource<T> extends DataSource<any> {

    public data: T[];
    public dataLength: number;

    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(private _database: Observable<T[]>,
        private _paginator: MdPaginator,
        private _sort: MdSort,
        private _filterFields: string[]) {
        super();
        this.dataLength = 0;
    }


    connect(): Observable<T[]> {
        const displayDataChanges: any = [
            // this._filterChange
        ];
        if (this._sort) {
            displayDataChanges.push(this._sort.sortChange);
        }
        if (this._paginator) {
            displayDataChanges.push(this._paginator.page);
        }
        return Observable.merge(this._database, ...displayDataChanges).map(arr => {
            if (arr instanceof Array) {
                this.data = arr;
                this.dataLength = this.data.length;
            }
            let result = this.data ? this.data.slice(0) : null;
            if (result) {
                // result = this.filterData(result);
                result = this.sortData(result);
                result = this.paginateData(result);
            }
            return result;
        });
    }

    disconnect(): void {
    }

    filterData(arr: T[]): T[] {
        if (this.filter) {
            arr = arr.filter((item: T) => {
                let searchStr = '';
                for (const key of this._filterFields) {
                    if (item[key]) {
                        searchStr = item[key].toString().toLowerCase();
                    }
                }
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
        }
        return arr;
    }

    sortData(arr: T[]): T[] {
        if (this._sort && this._sort.active) {
            const key = this._sort.active;
            arr = arr.sort((a, b) => {
                let propertyA: number|string = '';
                let propertyB: number|string = '';
                [propertyA, propertyB] = [a[key], b[key]];

                const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

                return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
            });
        }
        return arr;
    }

    paginateData(arr: T[]): T[] {
        if (this._paginator) {
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            arr = arr.splice(startIndex, this._paginator.pageSize);
        }
        return arr;
    }

}
