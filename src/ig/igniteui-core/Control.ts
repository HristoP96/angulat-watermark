/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FrameworkElement } from "./FrameworkElement";
import { Type, Base, markType } from "./type";
import { Thickness } from "./Thickness";
import { HorizontalAlignment } from "./HorizontalAlignment";
import { VerticalAlignment } from "./VerticalAlignment";

/**
 * @hidden 
 */
export class Control extends FrameworkElement {
	static $t: Type = markType(Control, 'Control', (<any>FrameworkElement).$type);
	constructor() {
		super();
	}
	private _defaultStyleKey: Type = null;
	get defaultStyleKey(): Type {
		return this._defaultStyleKey;
	}
	set defaultStyleKey(value: Type) {
		this._defaultStyleKey = value;
	}
	private _padding: Thickness = null;
	get padding(): Thickness {
		return this._padding;
	}
	set padding(value: Thickness) {
		this._padding = value;
	}
	onApplyTemplate(): void {
	}
	private _horizontalContentAlignment: HorizontalAlignment = <HorizontalAlignment>0;
	get horizontalContentAlignment(): HorizontalAlignment {
		return this._horizontalContentAlignment;
	}
	set horizontalContentAlignment(value: HorizontalAlignment) {
		this._horizontalContentAlignment = value;
	}
	private _verticalContentAlignment: VerticalAlignment = <VerticalAlignment>0;
	get verticalContentAlignment(): VerticalAlignment {
		return this._verticalContentAlignment;
	}
	set verticalContentAlignment(value: VerticalAlignment) {
		this._verticalContentAlignment = value;
	}
}


