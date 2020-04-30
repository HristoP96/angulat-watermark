/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, delegateCombine, delegateRemove, Type, markType } from "igniteui-core/type";
import { IAnnotationLayerProxy, IAnnotationLayerProxy_$type } from "./IAnnotationLayerProxy";
import { Series } from "./Series";
import { CalloutLayer } from "./CalloutLayer";
import { Visibility } from "igniteui-core/Visibility";
import { CrosshairLayer } from "./CrosshairLayer";
import { CalloutStyleUpdatingEventArgs } from "./CalloutStyleUpdatingEventArgs";

/**
 * @hidden 
 */
export class AnnotationLayerProxy extends Base implements IAnnotationLayerProxy {
	static $t: Type = markType(AnnotationLayerProxy, 'AnnotationLayerProxy', (<any>Base).$type, [IAnnotationLayerProxy_$type]);
	matchesType(series: Series): boolean {
		if (!series.isAnnotationLayer) {
			return false;
		}
		return true;
	}
	setContentMemberPath(series: Series, value: string): void {
		(<CalloutLayer>series).contentMemberPath = value;
	}
	setHorizontalLineVisibility(series: Series, value: Visibility): void {
		(<CrosshairLayer>series).horizontalLineVisibility = value;
	}
	setIsAxisAnnotationEnabled(series: Series, value: boolean): void {
		(<CrosshairLayer>series).isAxisAnnotationEnabled = value;
	}
	setLabelMemberPath(series: Series, value: string): void {
		(<CalloutLayer>series).labelMemberPath = value;
	}
	setUseInterpolation(series: Series, value: boolean): void {
		(<CrosshairLayer>series).useInterpolation = value;
	}
	setVerticalLineVisibility(series: Series, value: Visibility): void {
		(<CrosshairLayer>series).verticalLineVisibility = value;
	}
	setXMemberPath(series: Series, value: string): void {
		(<CalloutLayer>series).xMemberPath = value;
	}
	setYMemberPath(series: Series, value: string): void {
		(<CalloutLayer>series).yMemberPath = value;
	}
	setTargetSeries(series: Series, value: Series): void {
		(<CalloutLayer>series).targetSeries = value;
	}
	setCollisionChannel(series: Series, value: string): void {
		(<CalloutLayer>series).collisionChannel = value;
	}
	isCalloutLayer(series: Series): boolean {
		if (typeCast<CalloutLayer>((<any>CalloutLayer).$type, series) !== null) {
			return true;
		}
		return false;
	}
	addCalloutStyleUpdating(series: Series, raiseEventStyleUpdating: (sender: any, args: CalloutStyleUpdatingEventArgs) => void): void {
		let $t = (<CalloutLayer>series);
		$t.calloutStyleUpdating = delegateCombine($t.calloutStyleUpdating, raiseEventStyleUpdating);
	}
	removeCalloutStyleUpdating(series: Series, raiseEventStyleUpdating: (sender: any, args: CalloutStyleUpdatingEventArgs) => void): void {
		let $t = (<CalloutLayer>series);
		$t.calloutStyleUpdating = delegateRemove($t.calloutStyleUpdating, raiseEventStyleUpdating);
	}
	setCalloutStyleUpdatingEventEnabled(series: Series, calloutStyleUpdatingEventEnabled: boolean): void {
		(<CalloutLayer>series).isCustomCalloutStyleEnabled = calloutStyleUpdatingEventEnabled;
	}
}


