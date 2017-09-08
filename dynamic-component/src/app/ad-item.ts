import { Type } from "@angular/core";

export class AdItem {
    data: any;
    component: Type<any>;

    constructor(component: Type<any>, data: any) {
        this.component = component;
        this.data = data;
    }
}
