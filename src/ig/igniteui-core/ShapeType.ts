/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available types of item represented by the current row of a shapefile.
 */
export enum ShapeType {
	/**
	 * A placeholder value which cannot occur when reading a shapefile.
	 */
	None = 0,
	/**
	 * Specifies a point shape.
	 */
	Point = 1,
	/**
	 * Specifies a polyline shape.
	 */
	PolyLine = 3,
	/**
	 * Specifies a polygon shape.
	 */
	Polygon = 5,
	/**
	 * Specifies a polypoint shape (not supported; cannot occur when reading a shapefile)
	 */
	PolyPoint = 8,
	/**
	 * Specifies a polypoint shape (not supported; cannot occur when reading a shapefile)
	 */
	PointZ = 11,
	/**
	 * Specifies a polylinez shape 
	 */
	PolyLineZ = 13,
	/**
	 * Specifies a polygonz shape 
	 */
	PolygonZ = 15,
	/**
	 * Specifies a polypointz shape (not supported; cannot occur when reading a shapefile)
	 */
	PolyPointZ = 18,
	/**
	 * Specifies a pointm shape (not supported; cannot occur when reading a shapefile)
	 */
	PointM = 21,
	/**
	 * Specifies a polylinem shape (not supported; cannot occur when reading a shapefile)
	 */
	PolyLineM = 23,
	/**
	 * Specifies a polygonm shape (not supported; cannot occur when reading a shapefile)
	 */
	PolygonM = 25,
	/**
	 * Specifies a polypointm shape (not supported; cannot occur when reading a shapefile)
	 */
	PolyPointM = 28,
	/**
	 * Specifies a polypatchm shape (not supported; cannot occur when reading a shapefile)
	 */
	PolyPatch = 31
}

/**
 * @hidden 
 */
export let ShapeType_$type = markEnum('ShapeType', 'None,0|Point,1|PolyLine,3|Polygon,5|PolyPoint,8|PointZ,11|PolyLineZ,13|PolygonZ,15|PolyPointZ,18|PointM,21|PolyLineM,23|PolygonM,25|PolyPointM,28|PolyPatch,31');


