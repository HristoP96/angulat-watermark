/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObjectNotifier } from "./DependencyObjectNotifier";
import { IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IList, IList_$type, Base, BaseError, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, Type, delegateCombine, typeCast, markType } from "./type";
import { ShapefileRecord } from "./ShapefileRecord";
import { INotifyCollectionChanged, INotifyCollectionChanged_$type } from "./INotifyCollectionChanged";
import { Rect } from "./Rect";
import { ShapeType } from "./ShapeType";
import { Header } from "./Header";
import { DependencyProperty } from "./DependencyProperty";
import { DependencyObject } from "./DependencyObject";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { List$1 } from "./List$1";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { DependencyPropertyChangedEventArgs } from "./DependencyPropertyChangedEventArgs";
import { BinaryReader } from "./BinaryReader";
import { BinaryFileDownloader } from "./BinaryFileDownloader";
import { ShapeFilterRecordEventArgs } from "./ShapeFilterRecordEventArgs";
import { ShapeFileUtil } from "./ShapeFileUtil";
import { Uri } from "./Uri";
import { PropertyMetadata } from "./PropertyMetadata";

/**
 * @hidden 
 */
export class ShapefileConverter extends DependencyObjectNotifier implements IList$1<ShapefileRecord>, INotifyCollectionChanged {
	static $t: Type = markType(ShapefileConverter, 'ShapefileConverter', (<any>DependencyObjectNotifier).$type, [IList$1_$type.specialize((<any>ShapefileRecord).$type), INotifyCollectionChanged_$type]);
	constructor() {
		super();
		this.records = new ObservableCollection$1<ShapefileRecord>((<any>ShapefileRecord).$type, 0);
		let $t = this.records;
		$t.collectionChanged = delegateCombine($t.collectionChanged, (sender: any, e: NotifyCollectionChangedEventArgs) => {
			if (this.collectionChanged != null) {
				this.collectionChanged(this, e);
			}
		});
	}
	get worldRect(): Rect {
		return this._worldRect;
	}
	set worldRect(value: Rect) {
		if (Rect.l_op_Inequality(this._worldRect, value)) {
			let oldValue = this._worldRect;
			this._worldRect = value;
			this.propertyUpdated(ShapefileConverter.worldRectPropertyName, oldValue, this._worldRect);
		}
	}
	private _worldRect: Rect = null;
	private static readonly worldRectPropertyName: string = "WorldRect";
	get computedWorldRect(): Rect {
		return this._computedWorldRect;
	}
	set computedWorldRect(value: Rect) {
		if (Rect.l_op_Inequality(this._computedWorldRect, value)) {
			let oldValue = this._computedWorldRect;
			this._computedWorldRect = value;
			this.propertyUpdated(ShapefileConverter.computedWorldRectPropertyName, oldValue, this._computedWorldRect);
		}
	}
	private _computedWorldRect: Rect = Rect.empty;
	private static readonly computedWorldRectPropertyName: string = "ComputedWorldRect";
	getWorldBounds(useComputed: boolean): Rect {
		if (useComputed && this.computedWorldRect.isEmpty == false) {
			return this.computedWorldRect;
		}
		return this.worldRect;
	}
	get shapeType(): ShapeType {
		return this.shapeHeader.shapeType;
	}
	private _shapeHeader: Header = null;
	get shapeHeader(): Header {
		return this._shapeHeader;
	}
	set shapeHeader(value: Header) {
		this._shapeHeader = value;
	}
	private static readonly shapefileSourcePropertyName: string = "ShapefileSource";
	static readonly shapefileSourceProperty: DependencyProperty = DependencyProperty.register(ShapefileConverter.shapefileSourcePropertyName, (<any>Uri).$type, (<any>ShapefileConverter).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ShapefileConverter>((<any>ShapefileConverter).$type, sender)).propertyUpdated(ShapefileConverter.shapefileSourcePropertyName, e.oldValue, e.newValue)));
	get shapefileSource(): string {
		return <string>this.getValue(ShapefileConverter.shapefileSourceProperty);
	}
	set shapefileSource(value: string) {
		this.setValue(ShapefileConverter.shapefileSourceProperty, value);
	}
	private static readonly databaseSourcePropertyName: string = "DatabaseSource";
	static readonly databaseSourceProperty: DependencyProperty = DependencyProperty.register(ShapefileConverter.databaseSourcePropertyName, (<any>Uri).$type, (<any>ShapefileConverter).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ShapefileConverter>((<any>ShapefileConverter).$type, sender)).propertyUpdated(ShapefileConverter.databaseSourcePropertyName, e.oldValue, e.newValue)));
	get databaseSource(): string {
		return <string>this.getValue(ShapefileConverter.databaseSourceProperty);
	}
	set databaseSource(value: string) {
		this.setValue(ShapefileConverter.databaseSourceProperty, value);
	}
	private propertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case ShapefileConverter.shapefileSourcePropertyName:

			case ShapefileConverter.databaseSourcePropertyName:
			if (this.shapefileSource != null && this.databaseSource != null) {
				this.importAsync();
			}
			break;

		}

		this.onPropertyChanged(propertyName);
	}
	importCompleted: (sender: any, args: AsyncCompletedEventArgs) => void = null;
	private onImportCompleted(e: AsyncCompletedEventArgs): void {
		if (this.importCompleted != null) {
			this.importCompleted(this, e);
		}
	}
	private importAsync(): void {
		let shpReader: BinaryReader = null;
		let dbfReader: BinaryReader = null;
		let finished: () => void = () => {
			if (shpReader != null && dbfReader != null) {
				this.parseShapes(shpReader, dbfReader);
				this.onImportCompleted(new AsyncCompletedEventArgs(null, false, null));
			}
		};
		BinaryFileDownloader.downloadFile(this.shapefileSource, (txt: string) => {
			shpReader = new BinaryReader(0, txt, false);
			finished();
		}, (txt: string) => {
			throw new BaseError(1, "shape file download error: " + txt);
		});
		BinaryFileDownloader.downloadFile(this.databaseSource, (txt: string) => {
			dbfReader = new BinaryReader(0, txt, false);
			finished();
		}, (txt: string) => {
			throw new BaseError(1, "dbf file download error: " + txt);
		});
	}
	private parseShapes(shpReader: BinaryReader, dbfReader: BinaryReader): void {
		this.shapeHeader = ShapeFileUtil.readHeader(shpReader, dbfReader);
		this.worldRect = this.shapeHeader.bounds;
		let position: number = shpReader.currentPosition;
		let length: number = shpReader.length;
		let calcBounds: Rect = Rect.empty;
		while (position < length) {
			let record: ShapefileRecord = ShapeFileUtil.readShape(this.shapeHeader, shpReader, dbfReader);
			let record_ = record;
			let shouldInclude: boolean = true;
			if (this.filter != null) {
				let args = new ShapeFilterRecordEventArgs();
				args.shouldInclude = true;
				args.record = record;
				this.filter(this, args);
				if (!args.shouldInclude) {
					shouldInclude = false;
				}
			}
			if (shouldInclude) {
				this.records.add(record);
				if (calcBounds.isEmpty) {
					calcBounds = record.bounds;
				} else {
					calcBounds.union(record.bounds);
				}
			}
			position = shpReader.currentPosition;
			length = shpReader.length;
		}
		this.computedWorldRect = calcBounds.isEmpty ? this.worldRect : calcBounds;
	}
	private _records: ObservableCollection$1<ShapefileRecord> = null;
	private get records(): ObservableCollection$1<ShapefileRecord> {
		return this._records;
	}
	private set records(value: ObservableCollection$1<ShapefileRecord>) {
		this._records = value;
	}
	collectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void = null;
	indexOf(item: ShapefileRecord): number {
		return this._records.indexOf(item);
	}
	insert(index: number, item: ShapefileRecord): void {
		this._records.insert(index, item);
	}
	removeAt(index: number): void {
		this._records.removeAt(index);
	}
	item(index: number, value?: ShapefileRecord): ShapefileRecord {
		if (arguments.length === 2) {
			this._records.item(index, value);
			return value;
		} else {
			return this._records._inner[index];
		}
	}
	add(item: ShapefileRecord): void {
		this._records.add(item);
	}
	clear(): void {
		this._records.clear();
	}
	contains(item: ShapefileRecord): boolean {
		return this._records.contains(item);
	}
	copyTo(array: ShapefileRecord[], arrayIndex: number): void {
		this._records.copyTo(array, arrayIndex);
	}
	get count(): number {
		return this._records.count;
	}
	get isReadOnly(): boolean {
		return (<IList>this._records).isReadOnly;
	}
	remove(item: ShapefileRecord): boolean {
		return this._records.remove(item);
	}
	getEnumerator(): IEnumerator$1<ShapefileRecord> {
		return this._records.getEnumerator();
	}
	getEnumeratorObject(): IEnumerator {
		return this._records.getEnumerator();
	}
	getPointData(): List$1<ShapefileRecord> {
		return new List$1<ShapefileRecord>((<any>ShapefileRecord).$type, 1, this.records);
	}
	getRecord(index: number): ShapefileRecord {
		return this.records._inner[index];
	}
	filter: (sender: any, e: ShapeFilterRecordEventArgs) => void = null;
}


