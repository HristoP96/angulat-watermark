/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";

/**
 * @hidden 
 */
export class ElevationHelper extends Base {
	static $t: Type = markType(ElevationHelper, 'ElevationHelper');
	private static _umbraShadows: string[] = null;
	private static _penumbraShadows: string[] = null;
	private static _ambientShadows: string[] = null;
	static umbraShadow(elevation: number, color: string): string {
		if (ElevationHelper._umbraShadows == null) {
			ElevationHelper._umbraShadows = <string[]>[ "0 1px 3px 0 ", "0 1px 5px 0 ", "0 1px 8px 0 ", "0 2px 4px -1px ", "0 3px 5px -1px ", "0 3px 5px -1px ", "0 4px 5px -2px ", "0 5px 5px -3px ", "0 5px 6px -3px ", "0 6px 6px -3px ", "0 6px 7px -4px ", "0 7px 8px -4px ", "0 7px 8px -4px ", "0 7px 9px -4px ", "0 8px 9px -5px ", "0 8px 10px -5px ", "0 8px 11px -5px ", "0 9px 11px -5px ", "0 9px 12px -6px ", "0 10px 13px -6px ", "0 10px 13px -6px ", "0 10px 14px -6px ", "0 11px 14px -7px ", "0 11px 15px -7px " ];
		}
		elevation--;
		if (elevation < 0) {
			return "";
		}
		if (elevation > ElevationHelper._umbraShadows.length - 1) {
			elevation = ElevationHelper._umbraShadows.length - 1;
		}
		return ElevationHelper._umbraShadows[elevation] + color;
	}
	static penumbraShadow(elevation: number, color: string): string {
		if (ElevationHelper._penumbraShadows == null) {
			ElevationHelper._penumbraShadows = <string[]>[ "0 1px 1px 0 ", "0 2px 2px 0 ", "0 3px 4px 0 ", "0 4px 5px 0 ", "0 5px 8px 0 ", "0 6px 10px 0 ", "0 7px 10px 1px ", "0 8px 10px 1px ", "0 9px 12px 1px ", "0 10px 14px 1px ", "0 11px 15px 1px ", "0 12px 17px 2px ", "0 13px 19px 2px ", "0 14px 21px 2px ", "0 15px 22px 2px ", "0 16px 24px 2px ", "0 17px 26px 2px ", "0 18px 28px 2px ", "0 19px 29px 2px ", "0 20px 31px 3px ", "0 21px 33px 3px ", "0 22px 35px 3px ", "0 23px 36px 3px ", "0 24px 38px 3px " ];
		}
		elevation--;
		if (elevation < 0) {
			return "";
		}
		if (elevation > ElevationHelper._penumbraShadows.length - 1) {
			elevation = ElevationHelper._penumbraShadows.length - 1;
		}
		return ElevationHelper._penumbraShadows[elevation] + color;
	}
	static ambientShadow(elevation: number, color: string): string {
		if (ElevationHelper._ambientShadows == null) {
			ElevationHelper._ambientShadows = <string[]>[ "0 2px 1px -1px ", "0 3px 1px -2px ", "0 3px 3px -2px ", "0 1px 10px 0 ", "0 1px 14px 0 ", "0 1px 18px 0 ", "0 2px 16px 1px ", "0 3px 14px 2px ", "0 3px 16px 2px ", "0 4px 18px 3px ", "0 4px 20px 3px ", "0 5px 22px 4px ", "0 5px 24px 4px ", "0 5px 26px 4px ", "0 6px 28px 5px ", "0 6px 30px 5px ", "0 6px 32px 5px ", "0 7px 34px 6px ", "0 7px 36px 6px ", "0 8px 38px 7px ", "0 8px 40px 7px ", "0 8px 42px 7px ", "0 9px 44px 8px ", "0 9px 46px 8px " ];
		}
		elevation--;
		if (elevation < 0) {
			return "";
		}
		if (elevation > ElevationHelper._ambientShadows.length - 1) {
			elevation = ElevationHelper._ambientShadows.length - 1;
		}
		return ElevationHelper._ambientShadows[elevation] + color;
	}
	static getElevationShadow(elevation: number, umbraColor: Brush, penumbraColor: Brush, ambientColor: Brush): string {
		if (elevation == 0) {
			return "";
		}
		return ElevationHelper.umbraShadow(elevation, umbraColor._fill) + ", " + ElevationHelper.penumbraShadow(elevation, penumbraColor._fill) + ", " + ElevationHelper.ambientShadow(elevation, ambientColor._fill);
	}
}


