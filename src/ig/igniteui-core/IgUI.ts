/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

export interface EasingFunctionHandler {
    (time: number): number;
}

export interface Action {
    (): void;
}

export class EventArgs {

}

export enum ListSortDirection {
    Ascending = 0,
    Descending = 1
}

export class SortDescription {
    private _propertyName: string;
    public get propertyName() : string {
        return this._propertyName;
    }

    public set propertName(value: string) {
        this._propertyName = value;
    }

    private _direction: ListSortDirection;
    public get direction() : ListSortDirection {
        return this._direction;
    }

    public set direction(value: ListSortDirection) {
        this._direction = value;
    }
}

