/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IDataSeriesAdapterRule, IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { DataSeriesAdapterRunContext } from "./DataSeriesAdapterRunContext";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { IDataSourceSupportsIndexedAccess } from "./IDataSourceSupportsIndexedAccess";
import { DataSeriesDataProviderAnalyzer } from "./DataSeriesDataProviderAnalyzer";

/**
 * @hidden 
 */
export class SubCollectionsRule extends Base implements IDataSeriesAdapterRule {
	static $t: Type = markType(SubCollectionsRule, 'SubCollectionsRule', (<any>Base).$type, [IDataSeriesAdapterRule_$type]);
	constructor() {
		super();
		this.priority = 0;
		this.collectionTransformationThreshold = 50;
	}
	private _priority: number = 0;
	get priority(): number {
		return this._priority;
	}
	set priority(value: number) {
		this._priority = value;
	}
	private _collectionTransformationThreshold: number = 0;
	get collectionTransformationThreshold(): number {
		return this._collectionTransformationThreshold;
	}
	set collectionTransformationThreshold(value: number) {
		this._collectionTransformationThreshold = value;
	}
	evaluate(context: DataSeriesAdapterRunContext): void {
		let provider = context.getCurrentDataSource();
		if (provider == null) {
			return;
		}
		if (provider.actualCount == 0 || provider.actualCount > this.collectionTransformationThreshold) {
			return;
		}
		let firstItem = provider.getItemAtIndex(0);
		if (context.analyzer.isCollection(firstItem)) {
			for (let i = 0; i < provider.actualCount; i++) {
				if (context.analyzer.isCollection(provider.getItemAtIndex(i))) {
					let titleString = context.analyzer.getTitleString(provider.getItemAtIndex(i), null);
					if (titleString != null) {
						context.pushParentTitle(titleString);
					}
					context.recurseRules(provider.getItemAtIndex(i), "[" + i + "]", false);
					if (titleString != null) {
						context.popParentTitle();
					}
				}
			}
		}
	}
}


