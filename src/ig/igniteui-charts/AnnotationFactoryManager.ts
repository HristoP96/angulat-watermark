/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DVContainer } from "igniteui-core/DVContainer";
import { IAnnotationInfoProvider, IAnnotationInfoProvider_$type } from "./IAnnotationInfoProvider";
import { AnnotationInfoProvider } from "./AnnotationInfoProvider";
import { IAxisAnnotationManager, IAxisAnnotationManager_$type } from "./IAxisAnnotationManager";
import { AxisAnnotationManager } from "./AxisAnnotationManager";

/**
 * @hidden 
 */
export class AnnotationFactoryManager extends Base {
	static $t: Type = markType(AnnotationFactoryManager, 'AnnotationFactoryManager');
	private static _isRegistered: boolean = false;
	static register(): void {
		if (!AnnotationFactoryManager._isRegistered) {
			DVContainer.instance.registerFactory(IAnnotationInfoProvider_$type, () => new AnnotationInfoProvider());
			DVContainer.instance.registerFactory(IAxisAnnotationManager_$type, () => new AxisAnnotationManager());
			AnnotationFactoryManager._isRegistered = true;
		}
	}
}


