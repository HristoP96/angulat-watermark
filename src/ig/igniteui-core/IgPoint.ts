/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Point, PointUtil, Point_$type, typeCast } from "./type";

export interface IgPoint {
    x: number,
    y: number
}

export function isPoint(p: any): boolean {
    if (p == null)
        return false;

    if (typeCast(Point_$type, p) != null)
        return true;

    if (typeof p.x === "number" && typeof p.y === "number")
        return true;

    return false;
}

export function pointFromLiteral(p: IgPoint) : Point {
    if (p == null)
        return PointUtil.create();

    var cast = typeCast<Point>(Point_$type, p);
    if (cast != null)
        return cast;

    return PointUtil.createXY(p.x, p.y);
}

export function pointToLiteral(p: Point): IgPoint {
    if (p == null)
        return null;

    return { x: p.x, y: p.y };
}
