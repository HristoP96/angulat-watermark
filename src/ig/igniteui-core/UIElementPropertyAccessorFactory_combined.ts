/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { UIElementPropertyId } from "./UIElementPropertyId";
import { CssColorPropertyAccessor } from "./CssColorPropertyAccessor";
import { CssThicknessPropertyAccessor } from "./CssThicknessPropertyAccessor";
import { CssPixelsPropertyAccessor } from "./CssPixelsPropertyAccessor";
import { CssLengthPropertyAccessor } from "./CssLengthPropertyAccessor";
import { CssLengthArrayPropertyAccessor } from "./CssLengthArrayPropertyAccessor";
import { CssFloatPropertyAccessor } from "./CssFloatPropertyAccessor";
import { CssCornerRadiusPropertyAccessor } from "./CssCornerRadiusPropertyAccessor";
import { CssTransformPropertyAccessor } from "./CssTransformPropertyAccessor";

/**
 * @hidden 
 */
export abstract class UIElementPropertyAccessorFactory extends Base {
	static $t: Type = markType(UIElementPropertyAccessorFactory, 'UIElementPropertyAccessorFactory');
	private static _instance: UIElementPropertyAccessorFactory = null;
	static get instance(): UIElementPropertyAccessorFactory {
		if (UIElementPropertyAccessorFactory._instance == null) {
			UIElementPropertyAccessorFactory._instance = new PlatformUIElementPropertyAccessorFactory();
		}
		return UIElementPropertyAccessorFactory._instance;
	}
	abstract getPropertyAccessor(property: UIElementPropertyId): UIElementPropertyAccessor;
}

/**
 * @hidden 
 */
export class PlatformUIElementPropertyAccessorFactory extends UIElementPropertyAccessorFactory {
	static $t: Type = markType(PlatformUIElementPropertyAccessorFactory, 'PlatformUIElementPropertyAccessorFactory', (<any>UIElementPropertyAccessorFactory).$type);
	constructor() {
		super();
	}
	getPropertyAccessor(property: UIElementPropertyId): UIElementPropertyAccessor {
		switch (property) {
			case UIElementPropertyId.BackgroundColor:

			case UIElementPropertyId.BorderColor:

			case UIElementPropertyId.Color:

			case UIElementPropertyId.Stroke:

			case UIElementPropertyId.Fill: return new CssColorPropertyAccessor(this.getPropertyName(property));
			case UIElementPropertyId.BorderWidth:

			case UIElementPropertyId.Margin: return new CssThicknessPropertyAccessor(this.getPropertyName(property));
			case UIElementPropertyId.Left:

			case UIElementPropertyId.Height:

			case UIElementPropertyId.Top:

			case UIElementPropertyId.FontSize:

			case UIElementPropertyId.Width: return new CssPixelsPropertyAccessor(this.getPropertyName(property));
			case UIElementPropertyId.StrokeWidth:

			case UIElementPropertyId.StrokeDashOffset: return new CssLengthPropertyAccessor(this.getPropertyName(property));
			case UIElementPropertyId.StrokeDashArray: return new CssLengthArrayPropertyAccessor(this.getPropertyName(property));
			case UIElementPropertyId.Opacity: return new CssFloatPropertyAccessor(this.getPropertyName(property));
			case UIElementPropertyId.BorderRadius: return new CssCornerRadiusPropertyAccessor(this.getPropertyName(property));
			case UIElementPropertyId.Transform: return new CssTransformPropertyAccessor(this.getPropertyName(property));
		}

		return null;
	}
	private getPropertyName(property: UIElementPropertyId): string {
		switch (property) {
			case UIElementPropertyId.BackgroundColor: return "background-color";
			case UIElementPropertyId.BorderColor: return "border-color";
			case UIElementPropertyId.Color: return "color";
			case UIElementPropertyId.BorderWidth: return "border-width";
			case UIElementPropertyId.Margin: return "margin";
			case UIElementPropertyId.Left: return "left";
			case UIElementPropertyId.Height: return "height";
			case UIElementPropertyId.Top: return "top";
			case UIElementPropertyId.Width: return "width";
			case UIElementPropertyId.BorderRadius: return "border-radius";
			case UIElementPropertyId.FontSize: return "font-size";
			case UIElementPropertyId.Opacity: return "opacity";
			case UIElementPropertyId.Transform: return "transform";
			case UIElementPropertyId.Stroke: return "stroke";
			case UIElementPropertyId.Fill: return "fill";
			case UIElementPropertyId.StrokeDashArray: return "stroke-dasharray";
			case UIElementPropertyId.StrokeDashOffset: return "stroke-dashoffset";
			case UIElementPropertyId.StrokeWidth: return "stroke-width";
		}

		return "";
	}
}


