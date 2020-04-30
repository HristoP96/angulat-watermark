/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type } from "./type";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { TileImageZoomChangingEventArgs } from "./TileImageZoomChangingEventArgs";

/**
 * @hidden 
 */
export interface ITileGenerator { 
	getTile(z: number, x: number, y: number, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, zoomChanging: (sender: any, eventArgs: TileImageZoomChangingEventArgs) => void, existingImage: HTMLImageElement): void;
cancelTile(z: number, x: number, y: number): void;
}

/**
 * @hidden 
 */
export let ITileGenerator_$type = new Type(null, 'ITileGenerator');


