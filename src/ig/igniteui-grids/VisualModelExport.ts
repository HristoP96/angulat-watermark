/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RectData } from "igniteui-core/RectData";
import { GridLayerExport } from "./GridLayerExport";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class VisualModelExport extends Base {
	static $t: Type = markType(VisualModelExport, 'VisualModelExport');
	private _actualVisibleRegion: RectData = null;
	get actualVisibleRegion(): RectData {
		return this._actualVisibleRegion;
	}
	set actualVisibleRegion(value: RectData) {
		this._actualVisibleRegion = value;
	}
	private _absoluteWidth: number = 0;
	get absoluteWidth(): number {
		return this._absoluteWidth;
	}
	set absoluteWidth(value: number) {
		this._absoluteWidth = value;
	}
	private _absoluteHeight: number = 0;
	get absoluteHeight(): number {
		return this._absoluteHeight;
	}
	set absoluteHeight(value: number) {
		this._absoluteHeight = value;
	}
	private _fullHeaderHeight: number = 0;
	get fullHeaderHeight(): number {
		return this._fullHeaderHeight;
	}
	set fullHeaderHeight(value: number) {
		this._fullHeaderHeight = value;
	}
	private _fixedRowHeight: number = 0;
	get fixedRowHeight(): number {
		return this._fixedRowHeight;
	}
	set fixedRowHeight(value: number) {
		this._fixedRowHeight = value;
	}
	private _fixedColumnWidthLeft: number = 0;
	get fixedColumnWidthLeft(): number {
		return this._fixedColumnWidthLeft;
	}
	set fixedColumnWidthLeft(value: number) {
		this._fixedColumnWidthLeft = value;
	}
	private _fixedColumnWidthRight: number = 0;
	get fixedColumnWidthRight(): number {
		return this._fixedColumnWidthRight;
	}
	set fixedColumnWidthRight(value: number) {
		this._fixedColumnWidthRight = value;
	}
	private _columnSpacing: number = 0;
	get columnSpacing(): number {
		return this._columnSpacing;
	}
	set columnSpacing(value: number) {
		this._columnSpacing = value;
	}
	private _separatorLeft: number = 0;
	get separatorLeft(): number {
		return this._separatorLeft;
	}
	set separatorLeft(value: number) {
		this._separatorLeft = value;
	}
	private _separatorRight: number = 0;
	get separatorRight(): number {
		return this._separatorRight;
	}
	set separatorRight(value: number) {
		this._separatorRight = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _subContentLayer: GridLayerExport = null;
	get subContentLayer(): GridLayerExport {
		return this._subContentLayer;
	}
	set subContentLayer(value: GridLayerExport) {
		this._subContentLayer = value;
	}
	private _contentLayer: GridLayerExport = null;
	get contentLayer(): GridLayerExport {
		return this._contentLayer;
	}
	set contentLayer(value: GridLayerExport) {
		this._contentLayer = value;
	}
	private _superContentLayer: GridLayerExport = null;
	get superContentLayer(): GridLayerExport {
		return this._superContentLayer;
	}
	set superContentLayer(value: GridLayerExport) {
		this._superContentLayer = value;
	}
	private _decoratorLayer: GridLayerExport = null;
	get decoratorLayer(): GridLayerExport {
		return this._decoratorLayer;
	}
	set decoratorLayer(value: GridLayerExport) {
		this._decoratorLayer = value;
	}
	private _pinnedRowsSubLayer: GridLayerExport = null;
	get pinnedRowsSubLayer(): GridLayerExport {
		return this._pinnedRowsSubLayer;
	}
	set pinnedRowsSubLayer(value: GridLayerExport) {
		this._pinnedRowsSubLayer = value;
	}
	private _pinnedRowsLayer: GridLayerExport = null;
	get pinnedRowsLayer(): GridLayerExport {
		return this._pinnedRowsLayer;
	}
	set pinnedRowsLayer(value: GridLayerExport) {
		this._pinnedRowsLayer = value;
	}
	private _pinnedRowsSuperLayer: GridLayerExport = null;
	get pinnedRowsSuperLayer(): GridLayerExport {
		return this._pinnedRowsSuperLayer;
	}
	set pinnedRowsSuperLayer(value: GridLayerExport) {
		this._pinnedRowsSuperLayer = value;
	}
	private _fixedSubContentLayer: GridLayerExport = null;
	get fixedSubContentLayer(): GridLayerExport {
		return this._fixedSubContentLayer;
	}
	set fixedSubContentLayer(value: GridLayerExport) {
		this._fixedSubContentLayer = value;
	}
	private _fixedContentLayer: GridLayerExport = null;
	get fixedContentLayer(): GridLayerExport {
		return this._fixedContentLayer;
	}
	set fixedContentLayer(value: GridLayerExport) {
		this._fixedContentLayer = value;
	}
	private _fixedSuperContentLayer: GridLayerExport = null;
	get fixedSuperContentLayer(): GridLayerExport {
		return this._fixedSuperContentLayer;
	}
	set fixedSuperContentLayer(value: GridLayerExport) {
		this._fixedSuperContentLayer = value;
	}
	private _fixedPinnedRowsLayer: GridLayerExport = null;
	get fixedPinnedRowsLayer(): GridLayerExport {
		return this._fixedPinnedRowsLayer;
	}
	set fixedPinnedRowsLayer(value: GridLayerExport) {
		this._fixedPinnedRowsLayer = value;
	}
	private _fixedSeparatorLayer: GridLayerExport = null;
	get fixedSeparatorLayer(): GridLayerExport {
		return this._fixedSeparatorLayer;
	}
	set fixedSeparatorLayer(value: GridLayerExport) {
		this._fixedSeparatorLayer = value;
	}
	private _sectionLayer: GridLayerExport = null;
	get sectionLayer(): GridLayerExport {
		return this._sectionLayer;
	}
	set sectionLayer(value: GridLayerExport) {
		this._sectionLayer = value;
	}
	private _pinnedSectionSubLayer: GridLayerExport = null;
	get pinnedSectionSubLayer(): GridLayerExport {
		return this._pinnedSectionSubLayer;
	}
	set pinnedSectionSubLayer(value: GridLayerExport) {
		this._pinnedSectionSubLayer = value;
	}
	private _pinnedSectionLayer: GridLayerExport = null;
	get pinnedSectionLayer(): GridLayerExport {
		return this._pinnedSectionLayer;
	}
	set pinnedSectionLayer(value: GridLayerExport) {
		this._pinnedSectionLayer = value;
	}
	private _pinnedSectionSuperLayer: GridLayerExport = null;
	get pinnedSectionSuperLayer(): GridLayerExport {
		return this._pinnedSectionSuperLayer;
	}
	set pinnedSectionSuperLayer(value: GridLayerExport) {
		this._pinnedSectionSuperLayer = value;
	}
	private _subHeaderLayer: GridLayerExport = null;
	get subHeaderLayer(): GridLayerExport {
		return this._subHeaderLayer;
	}
	set subHeaderLayer(value: GridLayerExport) {
		this._subHeaderLayer = value;
	}
	private _subHeaderDecoratorLayer: GridLayerExport = null;
	get subHeaderDecoratorLayer(): GridLayerExport {
		return this._subHeaderDecoratorLayer;
	}
	set subHeaderDecoratorLayer(value: GridLayerExport) {
		this._subHeaderDecoratorLayer = value;
	}
	private _headerLayer: GridLayerExport = null;
	get headerLayer(): GridLayerExport {
		return this._headerLayer;
	}
	set headerLayer(value: GridLayerExport) {
		this._headerLayer = value;
	}
	private _headerDecoratorLayer: GridLayerExport = null;
	get headerDecoratorLayer(): GridLayerExport {
		return this._headerDecoratorLayer;
	}
	set headerDecoratorLayer(value: GridLayerExport) {
		this._headerDecoratorLayer = value;
	}
	private _superHeaderLayer: GridLayerExport = null;
	get superHeaderLayer(): GridLayerExport {
		return this._superHeaderLayer;
	}
	set superHeaderLayer(value: GridLayerExport) {
		this._superHeaderLayer = value;
	}
	private _superHeaderDecoratorLayer: GridLayerExport = null;
	get superHeaderDecoratorLayer(): GridLayerExport {
		return this._superHeaderDecoratorLayer;
	}
	set superHeaderDecoratorLayer(value: GridLayerExport) {
		this._superHeaderDecoratorLayer = value;
	}
	private _fixedSubHeaderLayer: GridLayerExport = null;
	get fixedSubHeaderLayer(): GridLayerExport {
		return this._fixedSubHeaderLayer;
	}
	set fixedSubHeaderLayer(value: GridLayerExport) {
		this._fixedSubHeaderLayer = value;
	}
	private _fixedSubHeaderDecoratorLayer: GridLayerExport = null;
	get fixedSubHeaderDecoratorLayer(): GridLayerExport {
		return this._fixedSubHeaderDecoratorLayer;
	}
	set fixedSubHeaderDecoratorLayer(value: GridLayerExport) {
		this._fixedSubHeaderDecoratorLayer = value;
	}
	private _fixedHeaderLayer: GridLayerExport = null;
	get fixedHeaderLayer(): GridLayerExport {
		return this._fixedHeaderLayer;
	}
	set fixedHeaderLayer(value: GridLayerExport) {
		this._fixedHeaderLayer = value;
	}
	private _fixedHeaderDecoratorLayer: GridLayerExport = null;
	get fixedHeaderDecoratorLayer(): GridLayerExport {
		return this._fixedHeaderDecoratorLayer;
	}
	set fixedHeaderDecoratorLayer(value: GridLayerExport) {
		this._fixedHeaderDecoratorLayer = value;
	}
	private _fixedSuperHeaderLayer: GridLayerExport = null;
	get fixedSuperHeaderLayer(): GridLayerExport {
		return this._fixedSuperHeaderLayer;
	}
	set fixedSuperHeaderLayer(value: GridLayerExport) {
		this._fixedSuperHeaderLayer = value;
	}
	private _fixedSuperHeaderDecoratorLayer: GridLayerExport = null;
	get fixedSuperHeaderDecoratorLayer(): GridLayerExport {
		return this._fixedSuperHeaderDecoratorLayer;
	}
	set fixedSuperHeaderDecoratorLayer(value: GridLayerExport) {
		this._fixedSuperHeaderDecoratorLayer = value;
	}
	private _verticalSeparatorLayer: GridLayerExport = null;
	get verticalSeparatorLayer(): GridLayerExport {
		return this._verticalSeparatorLayer;
	}
	set verticalSeparatorLayer(value: GridLayerExport) {
		this._verticalSeparatorLayer = value;
	}
	private _hiddenLayer: GridLayerExport = null;
	get hiddenLayer(): GridLayerExport {
		return this._hiddenLayer;
	}
	set hiddenLayer(value: GridLayerExport) {
		this._hiddenLayer = value;
	}
	private _dipScalingRatio: number = 0;
	get dipScalingRatio(): number {
		return this._dipScalingRatio;
	}
	set dipScalingRatio(value: number) {
		this._dipScalingRatio = value;
	}
	constructor() {
		super();
		this.actualVisibleRegion = RectData.empty;
		this.subContentLayer = new GridLayerExport("SubContentLayer");
		this.contentLayer = new GridLayerExport("ContentLayer");
		this.superContentLayer = new GridLayerExport("SuperContentLayer");
		this.decoratorLayer = new GridLayerExport("DecoratorLayer");
		this.pinnedRowsSubLayer = new GridLayerExport("PinnedRowsSubLayer");
		this.pinnedRowsLayer = new GridLayerExport("PinnedRowsLayer");
		this.pinnedRowsSuperLayer = new GridLayerExport("PinnedRowsSuperLayer");
		this.fixedSubContentLayer = new GridLayerExport("FixedSubContentLayer");
		this.fixedContentLayer = new GridLayerExport("FixedContentLayer");
		this.fixedSuperContentLayer = new GridLayerExport("FixedSuperContentLayer");
		this.fixedPinnedRowsLayer = new GridLayerExport("FixedPinnedRowsLayer");
		this.fixedSeparatorLayer = new GridLayerExport("FixedSeparatorLayer");
		this.sectionLayer = new GridLayerExport("SectionLayer");
		this.pinnedSectionSubLayer = new GridLayerExport("PinnedSectionSubLayer");
		this.pinnedSectionLayer = new GridLayerExport("PinnedSectionLayer");
		this.pinnedSectionSuperLayer = new GridLayerExport("PinnedSectionSuperLayer");
		this.subHeaderLayer = new GridLayerExport("SubHeaderLayer");
		this.subHeaderDecoratorLayer = new GridLayerExport("SubHeaderDecoratorLayer");
		this.headerLayer = new GridLayerExport("HeaderLayer");
		this.headerDecoratorLayer = new GridLayerExport("HeaderDecoratorLayer");
		this.superHeaderLayer = new GridLayerExport("SuperHeaderLayer");
		this.superHeaderDecoratorLayer = new GridLayerExport("SuperHeaderDecoratorLayer");
		this.fixedSubHeaderLayer = new GridLayerExport("FixedSubHeaderLayer");
		this.fixedSubHeaderDecoratorLayer = new GridLayerExport("FixedSubHeaderDecoratorLayer");
		this.fixedHeaderLayer = new GridLayerExport("FixedHeaderLayer");
		this.fixedHeaderDecoratorLayer = new GridLayerExport("FixedHeaderDecoratorLayer");
		this.fixedSuperHeaderLayer = new GridLayerExport("FixedSuperHeaderLayer");
		this.fixedSuperHeaderDecoratorLayer = new GridLayerExport("FixedSuperHeaderDecoratorLayer");
		this.verticalSeparatorLayer = new GridLayerExport("VerticalSeparatorLayer");
		this.hiddenLayer = new GridLayerExport("HiddenLayer");
		this.dipScalingRatio = 1;
	}
	updateLayerOrder(): void {
		this.gridLayers = new List$1<GridLayerExport>((<any>GridLayerExport).$type, 0);
		this.gridLayers.add(this.subContentLayer);
		this.gridLayers.add(this.contentLayer);
		this.gridLayers.add(this.superContentLayer);
		this.gridLayers.add(this.decoratorLayer);
		this.gridLayers.add(this.pinnedRowsSubLayer);
		this.gridLayers.add(this.pinnedRowsLayer);
		this.gridLayers.add(this.pinnedRowsSuperLayer);
		this.gridLayers.add(this.fixedSubContentLayer);
		this.gridLayers.add(this.fixedContentLayer);
		this.gridLayers.add(this.fixedSuperContentLayer);
		this.gridLayers.add(this.fixedPinnedRowsLayer);
		this.gridLayers.add(this.fixedSeparatorLayer);
		this.gridLayers.add(this.sectionLayer);
		this.gridLayers.add(this.pinnedSectionSubLayer);
		this.gridLayers.add(this.pinnedSectionLayer);
		this.gridLayers.add(this.pinnedSectionSuperLayer);
		this.gridLayers.add(this.subHeaderLayer);
		this.gridLayers.add(this.subHeaderDecoratorLayer);
		this.gridLayers.add(this.headerLayer);
		this.gridLayers.add(this.headerDecoratorLayer);
		this.gridLayers.add(this.superHeaderLayer);
		this.gridLayers.add(this.superHeaderDecoratorLayer);
		this.gridLayers.add(this.fixedSubHeaderLayer);
		this.gridLayers.add(this.fixedSubHeaderDecoratorLayer);
		this.gridLayers.add(this.fixedHeaderLayer);
		this.gridLayers.add(this.fixedHeaderDecoratorLayer);
		this.gridLayers.add(this.fixedSuperHeaderLayer);
		this.gridLayers.add(this.fixedSuperHeaderDecoratorLayer);
		this.gridLayers.add(this.verticalSeparatorLayer);
	}
	private _gridLayers: List$1<GridLayerExport> = null;
	get gridLayers(): List$1<GridLayerExport> {
		return this._gridLayers;
	}
	set gridLayers(value: List$1<GridLayerExport>) {
		this._gridLayers = value;
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
	}
	reset(): void {
		this.subContentLayer.clear();
		this.contentLayer.clear();
		this.superContentLayer.clear();
		this.decoratorLayer.clear();
		this.pinnedRowsSubLayer.clear();
		this.pinnedRowsLayer.clear();
		this.pinnedRowsSuperLayer.clear();
		this.fixedSubContentLayer.clear();
		this.fixedContentLayer.clear();
		this.fixedSuperContentLayer.clear();
		this.fixedPinnedRowsLayer.clear();
		this.fixedSeparatorLayer.clear();
		this.sectionLayer.clear();
		this.pinnedSectionSubLayer.clear();
		this.pinnedSectionLayer.clear();
		this.pinnedSectionSuperLayer.clear();
		this.subHeaderLayer.clear();
		this.subHeaderDecoratorLayer.clear();
		this.headerLayer.clear();
		this.headerDecoratorLayer.clear();
		this.superHeaderLayer.clear();
		this.superHeaderDecoratorLayer.clear();
		this.fixedSubHeaderLayer.clear();
		this.fixedSubHeaderDecoratorLayer.clear();
		this.fixedHeaderLayer.clear();
		this.fixedHeaderDecoratorLayer.clear();
		this.fixedSuperHeaderLayer.clear();
		this.fixedSuperHeaderDecoratorLayer.clear();
		this.verticalSeparatorLayer.clear();
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		sb.append5("{");
		sb.append5("top : " + this.top + ", ");
		sb.append5("left : " + this.left + ", ");
		sb.append5("height : " + this.height + ", ");
		sb.append5("width : " + this.width + ", ");
		sb.append5("absoluteWidth : " + this.absoluteWidth + ", ");
		sb.append5("absoluteHeight : " + this.absoluteHeight + ", ");
		sb.append5("headerHeight : " + this.fullHeaderHeight + ", ");
		sb.append5("fixedRowHeight : " + this.fixedRowHeight + ", ");
		sb.append5("fixedColumnWidthLeft : " + this.fixedColumnWidthLeft + ", ");
		sb.append5("fixedColumnWidthRight : " + this.fixedColumnWidthRight + ", ");
		sb.append5("dipScalingRatio: " + this.dipScalingRatio + ", ");
		sb.append5("columnSpacing : " + this.columnSpacing + ", ");
		sb.append5("separatorLeft : " + this.separatorLeft + ", ");
		sb.append5("separatorRight : " + this.separatorRight + ", ");
		for (let i = 0; i < this.gridLayers.count; i++) {
			let name = this.gridLayers._inner[i].name.charAt(0).toString().toLowerCase() + this.gridLayers._inner[i].name.substr(1);
			sb.append5(name + ": " + this.gridLayers._inner[i].serialize() + ", ");
		}
		sb.append5("actualVisibleRegion: { left: " + this.actualVisibleRegion.left + ", top: " + this.actualVisibleRegion.top + ", width: " + this.actualVisibleRegion.width + ", height: " + this.actualVisibleRegion.height + "}");
		sb.append5("}");
		return sb.toString();
	}
}


