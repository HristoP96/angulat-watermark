/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, runOn, delegateCombine, fromEnum, Type, markType, String_$type } from "igniteui-core/type";
import { SeriesViewer } from "./SeriesViewer";
import { Rect } from "igniteui-core/Rect";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { ITileZoomTile, ITileZoomTile_$type } from "./ITileZoomTile";
import { List$1 } from "igniteui-core/List$1";
import { TileZoomTileInfo } from "./TileZoomTileInfo";
import { RectChangedEventArgs } from "igniteui-core/RectChangedEventArgs";
import { Debug } from "igniteui-core/Debug";
import { TileZoomInfo } from "./TileZoomInfo";
import { SeriesViewerView } from "./SeriesViewerView";
import { ITileZoomTileInfo } from "./ITileZoomTileInfo";
import { truncate, logBase, isInfinity, isNaN_ } from "igniteui-core/number";
import { LinkedList$1 } from "igniteui-core/LinkedList$1";
import { LinkedListNode$1 } from "igniteui-core/LinkedListNode$1";

/**
 * @hidden 
 */
export class TileZoomManager extends Base {
	static $t: Type = markType(TileZoomManager, 'TileZoomManager');
	private _viewer: SeriesViewer = null;
	protected get viewer(): SeriesViewer {
		return this._viewer;
	}
	protected set viewer(value: SeriesViewer) {
		this._viewer = value;
	}
	private _viewport: Rect = null;
	protected get viewport(): Rect {
		return this._viewport;
	}
	protected set viewport(value: Rect) {
		this._viewport = value;
	}
	private _window: Rect = null;
	get window(): Rect {
		return this._window;
	}
	set window(value: Rect) {
		this._window = value;
	}
	private _tileViewport: Rect = null;
	get tileViewport(): Rect {
		return this._tileViewport;
	}
	set tileViewport(value: Rect) {
		this._tileViewport = value;
	}
	private _running: boolean = false;
	protected get running(): boolean {
		return this._running;
	}
	protected set running(value: boolean) {
		this._running = value;
	}
	private _minZoomLevel: number = 0;
	protected get minZoomLevel(): number {
		return this._minZoomLevel;
	}
	protected set minZoomLevel(value: number) {
		this._minZoomLevel = value;
	}
	private _existingTiles: Dictionary$2<TileZoomTile, ITileZoomTile> = null;
	protected get existingTiles(): Dictionary$2<TileZoomTile, ITileZoomTile> {
		return this._existingTiles;
	}
	protected set existingTiles(value: Dictionary$2<TileZoomTile, ITileZoomTile>) {
		this._existingTiles = value;
	}
	private _persistentTiles: Dictionary$2<TileZoomTile, ITileZoomTile> = null;
	protected get persistentTiles(): Dictionary$2<TileZoomTile, ITileZoomTile> {
		return this._persistentTiles;
	}
	protected set persistentTiles(value: Dictionary$2<TileZoomTile, ITileZoomTile>) {
		this._persistentTiles = value;
	}
	private _newTiles: List$1<ITileZoomTile> = null;
	protected get newTiles(): List$1<ITileZoomTile> {
		return this._newTiles;
	}
	protected set newTiles(value: List$1<ITileZoomTile>) {
		this._newTiles = value;
	}
	static readonly tileSize: number = 512;
	constructor(viewer: SeriesViewer, roundDown: boolean, cacheSize: number) {
		super();
		this.viewer = viewer;
		let $t = this.viewer;
		$t.actualWindowRectChanged = delegateCombine($t.actualWindowRectChanged, runOn(this, this.viewer_ActualWindowRectChanged));
		let $t1 = this.viewer;
		$t1.gridAreaRectChanged = delegateCombine($t1.gridAreaRectChanged, runOn(this, this.viewer_GridAreaRectChanged));
		this.tileCache = new TileZoomTileCache(cacheSize, this);
		this.visibleTiles = new List$1<TileZoomTileInfo>((<any>TileZoomTileInfo).$type, 0);
		this.currentTiles = new List$1<TileZoomTile>((<any>TileZoomTile).$type, 0);
		this.existingTiles = new Dictionary$2<TileZoomTile, ITileZoomTile>((<any>TileZoomTile).$type, ITileZoomTile_$type, 0);
		this.persistentTiles = new Dictionary$2<TileZoomTile, ITileZoomTile>((<any>TileZoomTile).$type, ITileZoomTile_$type, 0);
		this.newTiles = new List$1<ITileZoomTile>(ITileZoomTile_$type, 0);
		this.roundDown = roundDown;
		this.onViewportChanged();
	}
	private _lastDimension: number = -1;
	private onViewportChanged(): void {
		this.viewport = this.viewer.viewportRect;
		this.actualViewport = this.applySkew(this.viewport);
		let dimension = this.getDimension();
		this.clearVisible();
		this.clearTileCache();
		this._lastDimension = dimension;
		this.minZoomLevel = this.getMinZoomLevel(dimension);
		this.tileViewport = new Rect(0, 0, 0, dimension, dimension);
	}
	private _actualViewport: Rect = null;
	protected get actualViewport(): Rect {
		return this._actualViewport;
	}
	protected set actualViewport(value: Rect) {
		this._actualViewport = value;
	}
	private applySkew(viewport: Rect): Rect {
		return new Rect(0, viewport.left, viewport.top, viewport.width * this._horizontalCorrectiveSkew, viewport.height * this._verticalCorrectiveSkew);
	}
	private getMinZoomLevel(dimension: number): number {
		let numTiles = dimension / TileZoomManager.tileSize;
		let zoomLevel = logBase(numTiles, 2);
		return zoomLevel;
	}
	private getDimension(): number {
		let maxDimension = Math.max(this.actualViewport.width, this.actualViewport.height);
		let targetDimensionMult = 1;
		let targetDimension = TileZoomManager.tileSize;
		while (targetDimension < maxDimension) {
			targetDimensionMult++;
			targetDimension = TileZoomManager.tileSize * targetDimensionMult;
		}
		return targetDimension;
	}
	private viewer_GridAreaRectChanged(sender: any, e: RectChangedEventArgs): void {
		this.onViewportChanged();
		this.onWindowChanged();
	}
	private viewer_ActualWindowRectChanged(sender: any, e: RectChangedEventArgs): void {
		this.onWindowChanged();
	}
	private onWindowChanged(): void {
		this._hasContent = true;
		this.window = this.viewer.actualWindowRect;
		if (this.running) {
			if (this.updateCorrectiveSkew(this.window)) {
				Debug.writeLine("skew change: " + this._horizontalCorrectiveSkew + ", " + this._verticalCorrectiveSkew);
				this.onViewportChanged();
			}
			this.determineVisibleTiles();
			this.readyVisibleTiles();
			this.displayVisibleTiles();
		}
	}
	private _horizontalCorrectiveSkew: number = 1;
	private _verticalCorrectiveSkew: number = 1;
	private updateCorrectiveSkew(window: Rect): boolean {
		let horizontalSkewCorrection: number = 1;
		let verticalSkewCorrection: number = 1;
		if (this.isTooSkewed(window)) {
			if (window.width > window.height) {
				let skew: number = 1;
				if (window.height != 0) {
					skew = window.width / window.height;
				}
				let snapPow = 0;
				let snap = 1;
				while (snap < skew) {
					snapPow++;
					snap = <number>truncate(Math.pow(3, snapPow));
				}
				snap = <number>truncate(Math.pow(3, snapPow - 1));
				verticalSkewCorrection = snap;
				if (verticalSkewCorrection == 0 || isInfinity(verticalSkewCorrection) || isNaN_(verticalSkewCorrection)) {
					verticalSkewCorrection = 1;
				}
			} else {
				let skew1: number = 1;
				if (window.width != 0) {
					skew1 = window.height / window.width;
				}
				let snapPow1 = 0;
				let snap1 = 1;
				while (snap1 < skew1) {
					snapPow1++;
					snap1 = <number>truncate(Math.pow(3, snapPow1));
				}
				snap1 = <number>truncate(Math.pow(3, snapPow1 - 1));
				horizontalSkewCorrection = snap1;
				if (isInfinity(horizontalSkewCorrection) || isNaN_(horizontalSkewCorrection)) {
					horizontalSkewCorrection = 1;
				}
			}
		} else {
			horizontalSkewCorrection = 1;
			verticalSkewCorrection = 1;
		}
		let changed: boolean = verticalSkewCorrection != this._verticalCorrectiveSkew || horizontalSkewCorrection != this._horizontalCorrectiveSkew;
		this._horizontalCorrectiveSkew = horizontalSkewCorrection;
		this._verticalCorrectiveSkew = verticalSkewCorrection;
		return changed;
	}
	private static readonly maxAllowedSkew: number = 3;
	private isTooSkewed(window: Rect): boolean {
		return (window.width / window.height) > TileZoomManager.maxAllowedSkew || (window.height / window.width) > TileZoomManager.maxAllowedSkew;
	}
	private displayVisibleTiles(): void {
		let info = this.getZoomInfo();
		for (let i = 0; i < this.currentTiles.count; i++) {
			this.assignTileLocation(info, this.currentTiles._inner[i]);
		}
		let existing = new Dictionary$2<any, ITileZoomTile>((<any>Base).$type, ITileZoomTile_$type, 0);
		for (let key of fromEnum<TileZoomTile>(this.persistentTiles.keys)) {
			existing.addItem(this.persistentTiles.item(key).content, this.persistentTiles.item(key));
		}
		this.viewer.view.displayZoomTiles(existing, this.newTiles, TileZoomManager.tileSize);
	}
	private assignTileLocation(info: TileZoomInfo, tile: TileZoomTile): void {
		let window = this.getTileWindow(tile, info);
		let left = window.left * info.actualWidth;
		let top = window.top * info.actualHeight;
		let right = window.right * info.actualWidth;
		let bottom = window.bottom * info.actualHeight;
		let locX = left - info.actualRect.left;
		let locY = top - info.actualRect.top;
		let width = right - left;
		let height = bottom - top;
		Debug.assert(width > 0);
		Debug.assert(height > 0);
		tile.xPosition = locX / this._horizontalCorrectiveSkew;
		tile.yPosition = locY / this._verticalCorrectiveSkew;
		tile.width = width / this._horizontalCorrectiveSkew;
		tile.height = height / this._verticalCorrectiveSkew;
	}
	private readyVisibleTiles(): void {
		let info = this.getZoomInfo();
		this.existingTiles.clear();
		for (let i = 0; i < this.currentTiles.count; i++) {
			let currentTile = this.currentTiles._inner[i];
			this.existingTiles.addItem(currentTile, currentTile);
		}
		this.currentTiles.clear();
		this.persistentTiles.clear();
		this.newTiles.clear();
		for (let i1 = 0; i1 < this.visibleTiles.count; i1++) {
			let currentTile1 = this.visibleTiles._inner[i1];
			let tile = this.tileCache.getTile(currentTile1);
			if (tile == null) {
				tile = this.acquireTile(currentTile1, info);
				this.tileCache.addTile(tile);
			}
			if (this.existingTiles.containsKey(tile)) {
				this.existingTiles.removeItem(tile);
				this.persistentTiles.addItem(tile, tile);
			} else {
				this.activateTile(tile);
				this.newTiles.add(tile);
			}
			this.currentTiles.add(tile);
		}
		for (let key of fromEnum<TileZoomTile>(this.existingTiles.keys)) {
			this.deactivateTile(key);
		}
	}
	private deactivateTile(key: TileZoomTile): void {
	}
	private activateTile(tile: TileZoomTile): void {
	}
	private acquireTile(tileInfo: TileZoomTileInfo, info: TileZoomInfo): TileZoomTile {
		let tile = this.createTile(tileInfo);
		let window = this.getTileWindow(tile, info);
		let effectiveWindow = this.getEffectiveWindow();
		let widthScale = 1 / effectiveWindow.width;
		let heightScale = effectiveWindow.height;
		if (effectiveWindow.width > effectiveWindow.height) {
			widthScale = effectiveWindow.width;
			heightScale = 1 / effectiveWindow.height;
		}
		let left = (window.left - effectiveWindow.left) * widthScale;
		let top = (window.top - effectiveWindow.top) * heightScale;
		let right = (window.right - effectiveWindow.left) * widthScale;
		let bottom = (window.bottom - effectiveWindow.top) * heightScale;
		window = new Rect(0, left, top, right - left, bottom - top);
		let content = this.viewer.view.acquireTileContent(window, tile, <number>truncate(TileZoomManager.tileSize));
		tile.content = content;
		return tile;
	}
	private getEffectiveWindow(): Rect {
		let viewport = this.viewer.viewportRect;
		let effectiveViewport = this.viewer.effectiveViewport;
		if (effectiveViewport.isEmpty) {
			return new Rect(0, 0, 0, 1, 1);
		}
		let left = (effectiveViewport.left - viewport.left) / viewport.width;
		let top = (effectiveViewport.top - viewport.top) / viewport.height;
		let right = (effectiveViewport.right - viewport.left) / viewport.width;
		let bottom = (effectiveViewport.bottom - viewport.top) / viewport.height;
		return new Rect(0, left, top, right - left, bottom - top);
	}
	private getTileWindow(tile: TileZoomTile, info: TileZoomInfo): Rect {
		let tileLeft = tile.info.xPosition * TileZoomManager.tileSize;
		let tileTop = tile.info.yPosition * TileZoomManager.tileSize;
		let tileRight = tileLeft + TileZoomManager.tileSize;
		let tileBottom = tileTop + TileZoomManager.tileSize;
		let worldX = tileLeft / info.zoomWidth;
		let worldY = tileTop / info.zoomHeight;
		let worldWidth = TileZoomManager.tileSize / info.zoomWidth;
		let worldHeight = TileZoomManager.tileSize / info.zoomHeight;
		return new Rect(0, worldX, worldY, worldWidth, worldHeight);
	}
	private tileID: number = 0;
	private createTile(tileInfo: TileZoomTileInfo): TileZoomTile {
		let id = 0;
		id = this.tileID;
		this.tileID++;
		let tile: TileZoomTile = new TileZoomTile();
		tile.info = tileInfo;
		tile.iD = id;
		return tile;
	}
	private _visibleTiles: List$1<TileZoomTileInfo> = null;
	protected get visibleTiles(): List$1<TileZoomTileInfo> {
		return this._visibleTiles;
	}
	protected set visibleTiles(value: List$1<TileZoomTileInfo>) {
		this._visibleTiles = value;
	}
	private _currentTiles: List$1<TileZoomTile> = null;
	protected get currentTiles(): List$1<TileZoomTile> {
		return this._currentTiles;
	}
	protected set currentTiles(value: List$1<TileZoomTile>) {
		this._currentTiles = value;
	}
	private getZoomInfo(): TileZoomInfo {
		let actualWindow = this.getActualWindow(this.window);
		let currentZoomLevel: number = this.getZoomLevel(actualWindow);
		let width: number = Math.pow(2, currentZoomLevel) * TileZoomManager.tileSize;
		let height: number = width;
		let zoomWidth: number = (this.actualViewport.width / this.tileViewport.width) * width;
		let zoomHeight: number = (this.actualViewport.height / this.tileViewport.height) * height;
		let actualWidth: number = (this.actualViewport.width / actualWindow.width);
		let actualHeight: number = (this.actualViewport.height / actualWindow.height);
		let actualLeft: number = actualWindow.left * actualWidth;
		let actualTop: number = actualWindow.top * actualHeight;
		let actualRight: number = actualWindow.right * actualWidth;
		let actualBottom: number = actualWindow.bottom * actualHeight;
		let info: TileZoomInfo = new TileZoomInfo();
		info.actualRect = new Rect(0, actualLeft, actualTop, actualRight - actualLeft, actualBottom - actualTop);
		let windowAtZoom: Rect = this.getWindowAtZoom(this.window, info.actualRect, currentZoomLevel, actualWidth, actualHeight, zoomWidth, zoomHeight);
		let zoomLeft: number = windowAtZoom.left * zoomWidth;
		let zoomTop: number = windowAtZoom.top * zoomHeight;
		let zoomRight: number = windowAtZoom.right * zoomWidth;
		let zoomBottom: number = windowAtZoom.bottom * zoomHeight;
		info.zoomRect = new Rect(0, zoomLeft, zoomTop, zoomRight - zoomLeft, zoomBottom - zoomTop);
		info.currentZoomLevel = currentZoomLevel;
		info.zoomWidth = zoomWidth;
		info.zoomHeight = zoomHeight;
		info.actualWidth = actualWidth;
		info.actualHeight = actualHeight;
		return info;
	}
	private getActualWindow(window: Rect): Rect {
		return window;
	}
	private getWindowAtZoom(window: Rect, actualRect: Rect, currentZoomLevel: number, actualWidth: number, actualHeight: number, zoomWidth: number, zoomHeight: number): Rect {
		let centerX = (window.left + window.right) / 2;
		let centerY = (window.top + window.bottom) / 2;
		let width = window.width;
		let height = window.height;
		width = width * actualWidth / zoomWidth;
		height = height * actualHeight / zoomHeight;
		let halfWidth = width / 2;
		let halfHeight = height / 2;
		return new Rect(0, centerX - halfWidth, centerY - halfHeight, width, height);
	}
	private determineVisibleTiles(): void {
		let info = this.getZoomInfo();
		let tileSizeX = TileZoomManager.tileSize * info.actualWidth / info.zoomWidth;
		let tileSizeY = TileZoomManager.tileSize * info.actualHeight / info.zoomHeight;
		let xStart: number = <number>truncate(Math.floor(info.actualRect.left / tileSizeX));
		let yStart: number = <number>truncate(Math.floor(info.actualRect.top / tileSizeY));
		let xEnd: number = <number>truncate(Math.floor(info.actualRect.right / tileSizeX));
		let yEnd: number = <number>truncate(Math.floor(info.actualRect.bottom / tileSizeY));
		this.visibleTiles.clear();
		for (let y = yStart; y <= yEnd; y++) {
			for (let x = xStart; x <= xEnd; x++) {
				this.visibleTiles.add(((() => {
					let $ret = new TileZoomTileInfo();
					$ret.xPosition = x;
					$ret.yPosition = y;
					$ret.zoomLevel = info.currentZoomLevel;
					return $ret;
				})()));
			}
		}
	}
	private getZoomLevel(window: Rect): number {
		let scaleHoriz = 1 / window.width;
		let scaleVert = 1 / window.height;
		let zoomHoriz: number;
		let zoomVert: number;
		if (this.roundDown) {
			zoomHoriz = Math.floor(logBase(scaleHoriz, 2));
			zoomVert = Math.floor(logBase(scaleVert, 2));
		} else {
			zoomHoriz = Math.ceil(logBase(scaleHoriz, 2));
			zoomVert = Math.ceil(logBase(scaleVert, 2));
		}
		let zoom = Math.min(zoomHoriz, zoomVert) + (this.minZoomLevel);
		return <number>truncate(zoom);
	}
	private _tileCache: TileZoomTileCache = null;
	protected get tileCache(): TileZoomTileCache {
		return this._tileCache;
	}
	protected set tileCache(value: TileZoomTileCache) {
		this._tileCache = value;
	}
	private _hasContent: boolean = false;
	clearTileCache(): void {
		if (!this._hasContent) {
			return;
		}
		this._hasContent = false;
		this.viewer.view.destroyAllTileContent();
		this.tileCache.clear();
	}
	start(): void {
		this.running = true;
	}
	end(): void {
		this.running = false;
		this.viewer.view.hideZoomTiles();
	}
	private _roundDown: boolean = false;
	get roundDown(): boolean {
		return this._roundDown;
	}
	set roundDown(value: boolean) {
		this._roundDown = value;
	}
	destroyTile(tileZoomTile: TileZoomTile): void {
		this.viewer.view.destroyTileContent(tileZoomTile);
	}
	clearVisible(): void {
		this.currentTiles.clear();
		this.visibleTiles.clear();
		this.existingTiles.clear();
	}
}

/**
 * @hidden 
 */
export class TileZoomTileCache extends Base {
	static $t: Type = markType(TileZoomTileCache, 'TileZoomTileCache');
	private _cache: Dictionary$2<string, TileZoomTile> = new Dictionary$2<string, TileZoomTile>(String_$type, (<any>TileZoomTile).$type, 0);
	private _mru: LinkedList$1<TileZoomTile> = new LinkedList$1<TileZoomTile>((<any>TileZoomTile).$type);
	private _maxTiles: number = 0;
	private _owner: TileZoomManager = null;
	constructor(maxTiles: number, owner: TileZoomManager) {
		super();
		this._maxTiles = maxTiles;
		this._owner = owner;
	}
	clear(): void {
		this._cache.clear();
		this._mru = new LinkedList$1<TileZoomTile>((<any>TileZoomTile).$type);
	}
	touch(tileZoomTile: TileZoomTile): void {
		this._mru.remove(tileZoomTile.node);
		this._mru.addLast(tileZoomTile);
		tileZoomTile.node = this._mru.last;
	}
	addTile(tileZoomTile: TileZoomTile): void {
		this._mru.addLast(tileZoomTile);
		this._cache.addItem(tileZoomTile.info.toString(), tileZoomTile);
		tileZoomTile.owningCache = this;
		tileZoomTile.node = this._mru.last;
		while (this._cache.count > this._maxTiles) {
			this.removeTile(this._mru.first.value);
		}
	}
	private removeTile(tileZoomTile: TileZoomTile): void {
		this._mru.remove(tileZoomTile.node);
		this._cache.removeItem(tileZoomTile.info.toString());
		this._owner.destroyTile(tileZoomTile);
	}
	getTile(info: TileZoomTileInfo): TileZoomTile {
		if (this._cache.containsKey(info.toString())) {
			let tile = this._cache.item(info.toString());
			tile.touch();
			return tile;
		}
		return null;
	}
}

/**
 * @hidden 
 */
export class TileZoomTile extends Base implements ITileZoomTile {
	static $t: Type = markType(TileZoomTile, 'TileZoomTile', (<any>Base).$type, [ITileZoomTile_$type]);
	private _info: ITileZoomTileInfo = null;
	get info(): ITileZoomTileInfo {
		return this._info;
	}
	set info(value: ITileZoomTileInfo) {
		this._info = value;
	}
	private _owningCache: TileZoomTileCache = null;
	get owningCache(): TileZoomTileCache {
		return this._owningCache;
	}
	set owningCache(value: TileZoomTileCache) {
		this._owningCache = value;
	}
	private _node: LinkedListNode$1<TileZoomTile> = null;
	get node(): LinkedListNode$1<TileZoomTile> {
		return this._node;
	}
	set node(value: LinkedListNode$1<TileZoomTile>) {
		this._node = value;
	}
	touch(): void {
		if (this.owningCache == null) {
			return;
		}
		this.owningCache.touch(this);
	}
	private _content: any = null;
	get content(): any {
		return this._content;
	}
	set content(value: any) {
		this._content = value;
	}
	private _xPosition: number = 0;
	get xPosition(): number {
		return this._xPosition;
	}
	set xPosition(value: number) {
		this._xPosition = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _yPosition: number = 0;
	get yPosition(): number {
		return this._yPosition;
	}
	set yPosition(value: number) {
		this._yPosition = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _iD: number = 0;
	get iD(): number {
		return this._iD;
	}
	set iD(value: number) {
		this._iD = value;
	}
}


