/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { RangeInfo } from "./RangeInfo";
import { TickmarkValues } from "./TickmarkValues";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { PathRenderingInfo } from "./PathRenderingInfo";

/**
 * @hidden 
 */
export class AxisRenderingParametersBase extends Base {
	static $t: Type = markType(AxisRenderingParametersBase, 'AxisRenderingParametersBase');
	constructor() {
		super();
		this.rangeInfos = new List$1<RangeInfo>((<any>RangeInfo).$type, 0);
	}
	private _heuristicResolution: number = 0;
	get heuristicResolution(): number {
		return this._heuristicResolution;
	}
	set heuristicResolution(value: number) {
		this._heuristicResolution = value;
	}
	private _viewportRect: Rect = null;
	get viewportRect(): Rect {
		return this._viewportRect;
	}
	set viewportRect(value: Rect) {
		this._viewportRect = value;
	}
	private _windowRect: Rect = null;
	get windowRect(): Rect {
		return this._windowRect;
	}
	set windowRect(value: Rect) {
		this._windowRect = value;
	}
	private _effectiveViewportRect: Rect = null;
	get effectiveViewportRect(): Rect {
		return this._effectiveViewportRect;
	}
	set effectiveViewportRect(value: Rect) {
		this._effectiveViewportRect = value;
	}
	private _contentViewport: Rect = null;
	get contentViewport(): Rect {
		return this._contentViewport;
	}
	set contentViewport(value: Rect) {
		this._contentViewport = value;
	}
	private _rangeInfos: List$1<RangeInfo> = null;
	get rangeInfos(): List$1<RangeInfo> {
		return this._rangeInfos;
	}
	set rangeInfos(value: List$1<RangeInfo>) {
		this._rangeInfos = value;
	}
	private _currentRangeInfo: RangeInfo = null;
	get currentRangeInfo(): RangeInfo {
		return this._currentRangeInfo;
	}
	set currentRangeInfo(value: RangeInfo) {
		this._currentRangeInfo = value;
	}
	private _tickmarkValues: TickmarkValues = null;
	get tickmarkValues(): TickmarkValues {
		return this._tickmarkValues;
	}
	set tickmarkValues(value: TickmarkValues) {
		this._tickmarkValues = value;
	}
	private _strips: GeometryCollection = null;
	get strips(): GeometryCollection {
		return this._strips;
	}
	set strips(value: GeometryCollection) {
		this._strips = value;
	}
	private _major: GeometryCollection = null;
	get major(): GeometryCollection {
		return this._major;
	}
	set major(value: GeometryCollection) {
		this._major = value;
	}
	private _minor: GeometryCollection = null;
	get minor(): GeometryCollection {
		return this._minor;
	}
	set minor(value: GeometryCollection) {
		this._minor = value;
	}
	private _axisGeometry: GeometryCollection = null;
	get axisGeometry(): GeometryCollection {
		return this._axisGeometry;
	}
	set axisGeometry(value: GeometryCollection) {
		this._axisGeometry = value;
	}
	private _actualMinimumValue: number = 0;
	get actualMinimumValue(): number {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: number) {
		this._actualMinimumValue = value;
	}
	private _actualMaximumValue: number = 0;
	get actualMaximumValue(): number {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: number) {
		this._actualMaximumValue = value;
	}
	private _crossingValue: number = 0;
	get crossingValue(): number {
		return this._crossingValue;
	}
	set crossingValue(value: number) {
		this._crossingValue = value;
	}
	private _relativeCrossingValue: number = 0;
	get relativeCrossingValue(): number {
		return this._relativeCrossingValue;
	}
	set relativeCrossingValue(value: number) {
		this._relativeCrossingValue = value;
	}
	private _label: any = null;
	get label(): any {
		return this._label;
	}
	set label(value: any) {
		this._label = value;
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
	}
	private _hasUserInterval: boolean = false;
	get hasUserInterval(): boolean {
		return this._hasUserInterval;
	}
	set hasUserInterval(value: boolean) {
		this._hasUserInterval = value;
	}
	private _hasUserMax: boolean = false;
	get hasUserMax(): boolean {
		return this._hasUserMax;
	}
	set hasUserMax(value: boolean) {
		this._hasUserMax = value;
	}
	private _shouldRenderMinorLines: boolean = false;
	get shouldRenderMinorLines(): boolean {
		return this._shouldRenderMinorLines;
	}
	set shouldRenderMinorLines(value: boolean) {
		this._shouldRenderMinorLines = value;
	}
	private _currentRenderingInfo: PathRenderingInfo = null;
	get currentRenderingInfo(): PathRenderingInfo {
		return this._currentRenderingInfo;
	}
	set currentRenderingInfo(value: PathRenderingInfo) {
		this._currentRenderingInfo = value;
	}
	private _axisRenderingInfo: PathRenderingInfo = null;
	get axisRenderingInfo(): PathRenderingInfo {
		return this._axisRenderingInfo;
	}
	set axisRenderingInfo(value: PathRenderingInfo) {
		this._axisRenderingInfo = value;
	}
	private _majorRenderingInfo: PathRenderingInfo = null;
	get majorRenderingInfo(): PathRenderingInfo {
		return this._majorRenderingInfo;
	}
	set majorRenderingInfo(value: PathRenderingInfo) {
		this._majorRenderingInfo = value;
	}
	private _minorRenderingInfo: PathRenderingInfo = null;
	get minorRenderingInfo(): PathRenderingInfo {
		return this._minorRenderingInfo;
	}
	set minorRenderingInfo(value: PathRenderingInfo) {
		this._minorRenderingInfo = value;
	}
	private _minorInterval: number = 0;
	get minorInterval(): number {
		return this._minorInterval;
	}
	set minorInterval(value: number) {
		this._minorInterval = value;
	}
	isNumeric(): boolean {
		return false;
	}
}


