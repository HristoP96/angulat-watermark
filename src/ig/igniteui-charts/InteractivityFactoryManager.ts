/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, TypeRegistrar } from "igniteui-core/type";
import { DVContainer } from "igniteui-core/DVContainer";
import { ISeriesInteractionManager, ISeriesInteractionManager_$type } from "./ISeriesInteractionManager";
import { SeriesInteractionManager } from "./SeriesInteractionManager";
import { ICategorySeriesInteractionManager, ICategorySeriesInteractionManager_$type } from "./ICategorySeriesInteractionManager";
import { IAnchoredCategorySeriesInteractionManager, IAnchoredCategorySeriesInteractionManager_$type } from "./IAnchoredCategorySeriesInteractionManager";
import { IHorizontalAnchoredCategorySeriesInteractionManager, IHorizontalAnchoredCategorySeriesInteractionManager_$type } from "./IHorizontalAnchoredCategorySeriesInteractionManager";
import { IVerticalAnchoredCategorySeriesInteractionManager, IVerticalAnchoredCategorySeriesInteractionManager_$type } from "./IVerticalAnchoredCategorySeriesInteractionManager";
import { ISeriesViewerInteractionManager, ISeriesViewerInteractionManager_$type } from "./ISeriesViewerInteractionManager";
import { CategorySeriesInteractionManager } from "./CategorySeriesInteractionManager";
import { AnchoredCategorySeriesInteractionManager } from "./AnchoredCategorySeriesInteractionManager";
import { HorizontalAnchoredCategorySeriesInteractionManager } from "./HorizontalAnchoredCategorySeriesInteractionManager";
import { VerticalAnchoredCategorySeriesInteractionManager } from "./VerticalAnchoredCategorySeriesInteractionManager";
import { SeriesViewerInteractionManager } from "./SeriesViewerInteractionManager";

/**
 * @hidden 
 */
export class InteractivityFactoryManager extends Base {
	static $t: Type = markType(InteractivityFactoryManager, 'InteractivityFactoryManager');
	private static _isRegistered: boolean = false;
	static register(): void {
		if (!InteractivityFactoryManager._isRegistered) {
			TypeRegistrar.register("InteractivityFactoryManager", (<any>InteractivityFactoryManager).$type);
			DVContainer.instance.registerFactory(ISeriesInteractionManager_$type, () => new SeriesInteractionManager());
			DVContainer.instance.registerFactory(ICategorySeriesInteractionManager_$type, () => new CategorySeriesInteractionManager());
			DVContainer.instance.registerFactory(IAnchoredCategorySeriesInteractionManager_$type, () => new AnchoredCategorySeriesInteractionManager());
			DVContainer.instance.registerFactory(IHorizontalAnchoredCategorySeriesInteractionManager_$type, () => new HorizontalAnchoredCategorySeriesInteractionManager());
			DVContainer.instance.registerFactory(IVerticalAnchoredCategorySeriesInteractionManager_$type, () => new VerticalAnchoredCategorySeriesInteractionManager());
			DVContainer.instance.registerFactory(ISeriesViewerInteractionManager_$type, () => new SeriesViewerInteractionManager());
			InteractivityFactoryManager._isRegistered = true;
		}
	}
}


