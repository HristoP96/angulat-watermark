/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Base, BaseError, PropertyChangedEventArgs, Type, typeCast, markType } from "./type";
import { Uri } from "./Uri";
import { DependencyProperty } from "./DependencyProperty";
import { TriangulationSource } from "./TriangulationSource";
import { DependencyPropertyChangedEventArgs } from "./DependencyPropertyChangedEventArgs";
import { BinaryReader } from "./BinaryReader";
import { BinaryFileDownloader } from "./BinaryFileDownloader";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { List$1 } from "./List$1";
import { TriangulationSourcePointRecord } from "./TriangulationSourcePointRecord";
import { Triangle } from "./Triangle";
import { PropertyMetadata } from "./PropertyMetadata";

/**
 * @hidden 
 */
export class ItfConverter extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(ItfConverter, 'ItfConverter', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	private static readonly sourcePropertyName: string = "Source";
	static readonly sourceProperty: DependencyProperty = DependencyProperty.register(ItfConverter.sourcePropertyName, (<any>Uri).$type, (<any>ItfConverter).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ItfConverter>((<any>ItfConverter).$type, sender)).propertyUpdated(ItfConverter.sourcePropertyName, e.oldValue, e.newValue)));
	get source(): Uri {
		return typeCast<Uri>((<any>Uri).$type, this.getValue(ItfConverter.sourceProperty));
	}
	set source(value: Uri) {
		this.setValue(ItfConverter.sourceProperty, value);
	}
	private static readonly triangulationSourcePropertyName: string = "TriangulationSource";
	private _triangulationSource: TriangulationSource = null;
	get triangulationSource(): TriangulationSource {
		return this._triangulationSource;
	}
	set triangulationSource(value: TriangulationSource) {
		let changed: boolean = value != this.triangulationSource;
		if (changed) {
			let oldValue: any = this._triangulationSource;
			this._triangulationSource = value;
			this.onPropertyChanged(ItfConverter.triangulationSourcePropertyName, oldValue, this.triangulationSource);
		}
	}
	private importAsync(): void {
		let itfReader: BinaryReader = null;
		let finished: () => void = () => {
			if (itfReader != null) {
				this.triangulationSource = TriangulationSource.loadItf(itfReader);
			}
			this.onImportCompleted(new AsyncCompletedEventArgs(null, false, null));
		};
		BinaryFileDownloader.downloadFile(this.source.value, (txt: string) => {
			itfReader = new BinaryReader(0, txt, false);
			finished();
		}, (txt: string) => {
			throw new BaseError(1, "itf file download error: " + txt);
		});
	}
	importCompleted: (sender: any, args: AsyncCompletedEventArgs) => void = null;
	private onImportCompleted(e: AsyncCompletedEventArgs): void {
		if (this.importCompleted != null) {
			this.importCompleted(this, e);
		}
	}
	protected propertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case ItfConverter.sourcePropertyName:
			if (this.source != null) {
				this.importAsync();
			}
			break;

		}

	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdated(propertyName, oldValue, newValue);
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	getPointData(): List$1<TriangulationSourcePointRecord> {
		if (this._triangulationSource == null) {
			return null;
		}
		return new List$1<TriangulationSourcePointRecord>((<any>TriangulationSourcePointRecord).$type, 1, this._triangulationSource.points);
	}
	getTriangleData(): List$1<Triangle> {
		if (this._triangulationSource == null) {
			return null;
		}
		return new List$1<Triangle>((<any>Triangle).$type, 1, this._triangulationSource.triangles);
	}
}


