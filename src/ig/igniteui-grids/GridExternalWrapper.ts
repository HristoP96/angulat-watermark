/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable, IEnumerable_$type, Type, markType, TypeRegistrar } from "igniteui-core/type";
import { IExternalGrid, IExternalGrid_$type } from "./IExternalGrid";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { IDataSource } from "igniteui-core/IDataSource";
import { LocalDataSource } from "igniteui-core/LocalDataSource";
import { TextColumn } from "./TextColumn";
import { Column } from "./Column";
import { NumericColumn } from "./NumericColumn";
import { DateTimeColumn } from "./DateTimeColumn";
import { ImageColumn } from "./ImageColumn";
import { TemplateColumn } from "./TemplateColumn";

/**
 * @hidden 
 */
export class GridExternalWrapper extends Base implements IExternalGrid {
	static $t: Type = markType(GridExternalWrapper, 'GridExternalWrapper', (<any>Base).$type, [IExternalGrid_$type]);
	private _grid: any = null;
	constructor(grid: any) {
		super();
		this._grid = grid;
	}
	get renderer(): DomRenderer {
		let grid_ = this._grid;
		return <DomRenderer><any>(grid_._renderer);
	}
	onContentSizeChanged(): void {
		let grid_ = this._grid;
		grid_.refreshContentSize();
	}
	createLocalDataSource(itemsSource: any): IDataSource {
		let localSource: LocalDataSource = new LocalDataSource();
		localSource.itemsSource = <IEnumerable><any>itemsSource;
		return localSource;
	}
	createTextColumn(key: string): TextColumn {
		if (TypeRegistrar.isRegistered("IgxTextColumnComponent")) {
			let column_ = TypeRegistrar.create("IgxTextColumnComponent");
			let col = <TextColumn>(column_._implementation);
			col.propertyPath = key;
			return col;
		}
		return null;
	}
	createNumericColumn(key: string): NumericColumn {
		if (TypeRegistrar.isRegistered("IgxNumericColumnComponent")) {
			let column_ = TypeRegistrar.create("IgxNumericColumnComponent");
			let col = <NumericColumn>(column_._implementation);
			col.propertyPath = key;
			return col;
		}
		return null;
	}
	createDateTimeColumn(key: string): DateTimeColumn {
		if (TypeRegistrar.isRegistered("IgxDateTimeColumnComponent")) {
			let column_ = TypeRegistrar.create("IgxDateTimeColumnComponent");
			let col = <DateTimeColumn>(column_._implementation);
			col.propertyPath = key;
			return col;
		}
		return null;
	}
	createImageColumn(key: string): ImageColumn {
		if (TypeRegistrar.isRegistered("IgxImageColumnComponent")) {
			let column_ = TypeRegistrar.create("IgxImageColumnComponent");
			let col = <ImageColumn>(column_._implementation);
			col.propertyPath = key;
			return col;
		}
		return null;
	}
	createTemplateColumn(key: string): TemplateColumn {
		if (TypeRegistrar.isRegistered("IgxTemplateColumnComponent")) {
			let column_ = TypeRegistrar.create("IgxTemplateColumnComponent");
			let col = <TemplateColumn>(column_._implementation);
			col.propertyPath = key;
			return col;
		}
		return null;
	}
	focusScroller(): void {
		let grid_ = this._grid;
		grid_._focusScroller();
	}
	insertExternalColumnAtIndex(index_: number, column_: any): void {
		let grid_ = this._grid;
		grid_._insertExternalColumnAtIndex(index_, column_);
	}
	removeExternalColumn(column_: any): void {
		let grid_ = this._grid;
		grid_._removeExternalColumn(column_);
	}
	setDefaultCursor(): void {
		let grid_ = this._grid;
		grid_._setDefaultCursor();
	}
	setResizeCursor(): void {
		let grid_ = this._grid;
		grid_._setResizeCursor();
	}
	setHandCursor(): void {
		let grid_ = this._grid;
		grid_._setHandCursor();
	}
	ensureColumnsAreManual(): void {
		let grid_ = this._grid;
		grid_._ensureColumnsAreManual();
	}
}


