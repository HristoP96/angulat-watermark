/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RenderingMessage_Spark } from "./RenderingMessage_Spark";
import { List$1 } from "igniteui-core/List$1";
import { Point, Base, Type, markType } from "igniteui-core/type";
import { SparklineDisplayType } from "./SparklineDisplayType";

/**
 * @hidden 
 */
export class WinLossColumnMessage_Spark extends RenderingMessage_Spark {
	static $t: Type = markType(WinLossColumnMessage_Spark, 'WinLossColumnMessage_Spark', (<any>RenderingMessage_Spark).$type);
	private _columns: List$1<Point> = null;
	get columns(): List$1<Point> {
		return this._columns;
	}
	set columns(value: List$1<Point>) {
		this._columns = value;
	}
	private _negativeColumns: List$1<Point> = null;
	get negativeColumns(): List$1<Point> {
		return this._negativeColumns;
	}
	set negativeColumns(value: List$1<Point>) {
		this._negativeColumns = value;
	}
	private _firstColumn: Point = null;
	get firstColumn(): Point {
		return this._firstColumn;
	}
	set firstColumn(value: Point) {
		this._firstColumn = value;
	}
	private _lastColumn: Point = null;
	get lastColumn(): Point {
		return this._lastColumn;
	}
	set lastColumn(value: Point) {
		this._lastColumn = value;
	}
	private _lowColumns: List$1<Point> = null;
	get lowColumns(): List$1<Point> {
		return this._lowColumns;
	}
	set lowColumns(value: List$1<Point>) {
		this._lowColumns = value;
	}
	private _highColumns: List$1<Point> = null;
	get highColumns(): List$1<Point> {
		return this._highColumns;
	}
	set highColumns(value: List$1<Point>) {
		this._highColumns = value;
	}
	private _offset: number = 0;
	get offset(): number {
		return this._offset;
	}
	set offset(value: number) {
		this._offset = value;
	}
	private _crossing: number = 0;
	get crossing(): number {
		return this._crossing;
	}
	set crossing(value: number) {
		this._crossing = value;
	}
	private _bucketCount: number = 0;
	get bucketCount(): number {
		return this._bucketCount;
	}
	set bucketCount(value: number) {
		this._bucketCount = value;
	}
	private _displayType: SparklineDisplayType = <SparklineDisplayType>0;
	get displayType(): SparklineDisplayType {
		return this._displayType;
	}
	set displayType(value: SparklineDisplayType) {
		this._displayType = value;
	}
}


