/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates the image resource type to use.
 */
export enum ImageResourceType {
	/**
	 * Image resource type will attempt to be determined from any scheme specifiers on the paths.
	 */
	Unspecified = 0,
	/**
	 * Images are a local platform specific resource in the application.
	 */
	LocalResource = 1,
	/**
	 * Images are a local platform specific asset in the application. For platforms that don't support assets, this will fall back on local resource.
	 */
	LocalAsset = 2,
	/**
	 * Images are a .NET embedded resource in the application. Path needs to be a valid embedded resource identifier.
	 */
	EmbeddedResource = 3,
	/**
	 * Images are a remote URL resource.
	 */
	RemoteResource = 4
}

/**
 * @hidden 
 */
export let ImageResourceType_$type = markEnum('ImageResourceType', 'Unspecified,0|LocalResource,1|LocalAsset,2|EmbeddedResource,3|RemoteResource,4');


