import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
export declare class SelectFilterComponent extends DefaultFilter implements OnInit {
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
}
