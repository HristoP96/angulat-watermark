/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ITileZoomTileInfo } from "./ITileZoomTileInfo";
import { Base, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface ITileZoomTile { 
	info: ITileZoomTileInfo;
touch(): void;
content: any;
xPosition: number;
width: number;
yPosition: number;
height: number;
iD: number;
}

/**
 * @hidden 
 */
export let ITileZoomTile_$type = new Type(null, 'ITileZoomTile');


