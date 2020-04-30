import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxGeographicMapComponent } from "./igx-geographic-map-component";
import { IgxImageTilesReadyEventArgs } from "./igx-image-tiles-ready-event-args";
import { IgxImagesChangedEventArgs } from "./igx-images-changed-event-args";
import { IgxCancellingMultiScaleImageEventArgs } from "igniteui-core/igx-cancelling-multi-scale-image-event-args";
import { IgxDownloadingMultiScaleImageEventArgs } from "igniteui-core/igx-downloading-multi-scale-image-event-args";
import { GeographicMapImagery as GeographicMapImagery_internal } from "./GeographicMapImagery";
import { IMapRenderDeferralHandler } from "igniteui-core/IMapRenderDeferralHandler";
import { fromRect, toRect } from "igniteui-core/componentUtil";

/**
 * Control class used for displaying multi-scale TileSource imagery.  Designed to be used for background imagery in the IgxGeographicMap.Component
*/
export abstract class IgxGeographicMapImagery
{

protected createImplementation() : GeographicMapImagery_internal
{
	return null;
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GeographicMapImagery_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {
	this._implementation = this.createImplementation();
	(<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	/**
	 * The deferral handler to use for deferred refreshes.
	*/
	get deferralHandler() : IMapRenderDeferralHandler {
		return this.i.deferralHandler as IMapRenderDeferralHandler;
	}
	set deferralHandler(v: IMapRenderDeferralHandler) {
		this.i.deferralHandler = v;
	}
	/**
	 * A rectangle representing the portion of the map imagery currently in view.
	 * A rectangle at X=0, Y=0 with a Height and Width of 1 implies the entire plotting area is in view.  A Height and Width of .5 would imply that the view is halfway zoomed in.
	*/
	get windowRect() : IgRect {
		return fromRect(this.i.windowRect);
	}
	set windowRect(v: IgRect) {
		this.i.windowRect = toRect(v);
	}
	/**
	 * The IgxGeographicMapComponent which is hosting this GeographicMapImagery control.
	*/
	get geographicMap() : IgxGeographicMapComponent {
	                                        if (this.i.geographicMap == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.geographicMap as any).externalObject;
	}
	set geographicMap(v: IgxGeographicMapComponent) {
		v == null ? this.i.geographicMap = null : this.i.geographicMap = v.i;
	}
	/**
	 * Gets or sets the referer sent in the headers of the tile request.
	*/
	get referer() : string {
		return (this.i.referer as string);
	}
	set referer(v: string) {
		this.i.referer = v;
	}
	/**
	 * Gets or sets the UserAgent sent in the headers of the tile request.
	*/
	get userAgent() : string {
		return (this.i.userAgent as string);
	}
	set userAgent(v: string) {
		this.i.userAgent = v;
	}
	/**
	 * Removes all cached tile Imagery from the
	
	*/
	public clearTileCache() {
		this.i.clearTileCache();
	}
	private _imageTilesReady: EventEmitter<{ sender: any, args: IgxImageTilesReadyEventArgs}> = null;
	/**
	 * Event raised when the image tiles have been downloaded.
	*/
	@Output()
	get imageTilesReady(): EventEmitter<{ sender: any, args: IgxImageTilesReadyEventArgs}> {
		if (this._imageTilesReady == null) {
			this._imageTilesReady = new EventEmitter<{sender: any, args: IgxImageTilesReadyEventArgs}>();
			this.i.imageTilesReady = delegateCombine(this.i.imageTilesReady, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxImageTilesReadyEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeImageTilesReady) {
	                        (this as any).beforeImageTilesReady(this, outerArgs);
	                    }
					this._imageTilesReady.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._imageTilesReady;
	}
	private _imagesChanged: EventEmitter<{ sender: any, args: IgxImagesChangedEventArgs}> = null;
	/**
	 * Event raised when tile images have changed.
	*/
	@Output()
	get imagesChanged(): EventEmitter<{ sender: any, args: IgxImagesChangedEventArgs}> {
		if (this._imagesChanged == null) {
			this._imagesChanged = new EventEmitter<{sender: any, args: IgxImagesChangedEventArgs}>();
			this.i.imagesChanged = delegateCombine(this.i.imagesChanged, (o, e) => {
				let outerArgs = new IgxImagesChangedEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeImagesChanged) {
	                            (this as any).beforeImagesChanged(this, outerArgs);
	                        }
					    this._imagesChanged.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._imagesChanged;
	}
	private _cancellingImage: EventEmitter<{ sender: any, args: IgxCancellingMultiScaleImageEventArgs}> = null;
	/**
	 * Event raised when an image is being downloaded.
	*/
	@Output()
	get cancellingImage(): EventEmitter<{ sender: any, args: IgxCancellingMultiScaleImageEventArgs}> {
		if (this._cancellingImage == null) {
			this._cancellingImage = new EventEmitter<{sender: any, args: IgxCancellingMultiScaleImageEventArgs}>();
			this.i.cancellingImage = delegateCombine(this.i.cancellingImage, (o, e) => {
				let outerArgs = new IgxCancellingMultiScaleImageEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeCancellingImage) {
	                            (this as any).beforeCancellingImage(this, outerArgs);
	                        }
					    this._cancellingImage.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._cancellingImage;
	}
	private _downloadingImage: EventEmitter<{ sender: any, args: IgxDownloadingMultiScaleImageEventArgs}> = null;
	/**
	 * Event raised when an image is being downloaded.
	*/
	@Output()
	get downloadingImage(): EventEmitter<{ sender: any, args: IgxDownloadingMultiScaleImageEventArgs}> {
		if (this._downloadingImage == null) {
			this._downloadingImage = new EventEmitter<{sender: any, args: IgxDownloadingMultiScaleImageEventArgs}>();
			this.i.downloadingImage = delegateCombine(this.i.downloadingImage, (o, e) => {
				let outerArgs = new IgxDownloadingMultiScaleImageEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeDownloadingImage) {
	                            (this as any).beforeDownloadingImage(this, outerArgs);
	                        }
					    this._downloadingImage.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._downloadingImage;
	}
	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
