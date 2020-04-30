/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, PropertyChangedEventArgs, Point, String_$type, Type, markType } from "./type";
import { ShapeType } from "./ShapeType";
import { List$1 } from "./List$1";
import { Rect } from "./Rect";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class ShapefileRecord extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(ShapefileRecord, 'ShapefileRecord', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.fieldsNames = new List$1<string>(String_$type, 0);
		this.fieldsTypes = new List$1<string>(String_$type, 0);
	}
	private _shapeType: ShapeType = <ShapeType>0;
	get shapeType(): ShapeType {
		return this._shapeType;
	}
	set shapeType(value: ShapeType) {
		this._shapeType = value;
	}
	private _fieldsNames: List$1<string> = null;
	get fieldsNames(): List$1<string> {
		return this._fieldsNames;
	}
	set fieldsNames(value: List$1<string>) {
		this._fieldsNames = value;
	}
	private _fieldsTypes: List$1<string> = null;
	get fieldsTypes(): List$1<string> {
		return this._fieldsTypes;
	}
	set fieldsTypes(value: List$1<string>) {
		this._fieldsTypes = value;
	}
	fields: Dictionary$2<string, any> = null;
	points: List$1<List$1<Point>> = null;
	private onPropertyChanged(propertyName: string): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private _fieldValues: any = null;
	get fieldValues(): any {
		return this._fieldValues;
	}
	set fieldValues(value: any) {
		this._fieldValues = value;
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
}


