import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSubDomainsCollection } from "./igx-sub-domains-collection";
import { BingMapsImageryStyle, BingMapsImageryStyle_$type } from "./BingMapsImageryStyle";
import { IgxGeographicMapImagery } from "./igx-geographic-map-imagery";
import { BingMapsMapImagery as BingMapsMapImagery_internal } from "./BingMapsMapImagery";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";
import { SubDomainsCollection as SubDomainsCollection_internal } from "./SubDomainsCollection";
import { String_$type } from "igniteui-core/type";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";

/**
 * UI element class used to display BingMapsMap imagery in the IgxGeographicMap.Component
*/
export class IgxBingMapsMapImagery extends IgxGeographicMapImagery
{

protected createImplementation() : BingMapsMapImagery_internal
{
	return new BingMapsMapImagery_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : BingMapsMapImagery_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets a status whether the Bing Maps service is initialized.
	*/
	get isInitialized() : boolean {
		return (this.i.isInitialized as boolean);
	}
	set isInitialized(v: boolean) {
		this.i.isInitialized = ensureBool(v);
	}
	/**
	 * Gets or sets whether the Bing Maps service should be auto-initialized upon valid property values.
	*/
	get isDeferredLoad() : boolean {
		return (this.i.isDeferredLoad as boolean);
	}
	set isDeferredLoad(v: boolean) {
		this.i.isDeferredLoad = ensureBool(v);
	}
	/**
	 * Gets or sets the map tile image uri.
	*/
	get tilePath() : string {
		return (this.i.tilePath as string);
	}
	set tilePath(v: string) {
		this.i.tilePath = v;
	}
	/**
	 * Gets or sets the actual map tile image uri.
	*/
	get actualTilePath() : string {
		return (this.i.actualTilePath as string);
	}
	set actualTilePath(v: string) {
		this.i.actualTilePath = v;
	}
	private _subDomains: IgxSubDomainsCollection = null;
	                                
	/**
	 * Gets or sets the collection of image uri subdomains.
	*/
	get subDomains() : IgxSubDomainsCollection {
	                                        if (this._subDomains === null) {
	                                            let coll = new IgxSubDomainsCollection();
	                                            let innerColl = this.i.subDomains;
			if (!innerColl) {
	                                            	innerColl = new SubDomainsCollection_internal(0);
			}
	                                            this._subDomains = (coll as any)._fromInner(innerColl);
	                                            this.i.subDomains = innerColl;
	
	                                        }
		return this._subDomains;
	}
	set subDomains(v: IgxSubDomainsCollection) {
	                                        if (this._subDomains !== null) {
	                                            (this._subDomains as any)._setSyncTarget(null);
	                                            this._subDomains = null;
	                                        }
	                                        let coll = new IgxSubDomainsCollection();
	                                        this._subDomains = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<String>(String_$type);
	                                        let innerColl = this.i.subDomains;
		if (!innerColl) {
	                                        	innerColl = new SubDomainsCollection_internal(0);
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._subDomains as any)._setSyncTarget(syncColl);
	                                        this.i.subDomains = innerColl;
	
	}
	private _actualSubDomains: IgxSubDomainsCollection = null;
	                                
	/**
	 * Gets or sets the actual collection of image uri subdomains.
	*/
	get actualSubDomains() : IgxSubDomainsCollection {
	                                        if (this._actualSubDomains === null) {
	                                            let coll = new IgxSubDomainsCollection();
	                                            let innerColl = this.i.actualSubDomains;
			if (!innerColl) {
	                                            	innerColl = new SubDomainsCollection_internal(0);
			}
	                                            this._actualSubDomains = (coll as any)._fromInner(innerColl);
	                                            this.i.actualSubDomains = innerColl;
	
	                                        }
		return this._actualSubDomains;
	}
	set actualSubDomains(v: IgxSubDomainsCollection) {
	                                        if (this._actualSubDomains !== null) {
	                                            (this._actualSubDomains as any)._setSyncTarget(null);
	                                            this._actualSubDomains = null;
	                                        }
	                                        let coll = new IgxSubDomainsCollection();
	                                        this._actualSubDomains = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<String>(String_$type);
	                                        let innerColl = this.i.actualSubDomains;
		if (!innerColl) {
	                                        	innerColl = new SubDomainsCollection_internal(0);
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._actualSubDomains as any)._setSyncTarget(syncColl);
	                                        this.i.actualSubDomains = innerColl;
	
	}
	/**
	 * Gets or sets the Bing Imagery Rest Uri.
	*/
	get bingImageryRestUri() : string {
		return (this.i.bingImageryRestUri as string);
	}
	set bingImageryRestUri(v: string) {
		this.i.bingImageryRestUri = v;
	}
	/**
	 * Gets or sets the Actual Bing Imagery Rest Uri.
	*/
	get actualBingImageryRestUri() : string {
		return (this.i.actualBingImageryRestUri as string);
	}
	set actualBingImageryRestUri(v: string) {
		this.i.actualBingImageryRestUri = v;
	}
	/**
	 * Gets or sets the culture name for this tile source.
	*/
	get cultureName() : string {
		return (this.i.cultureName as string);
	}
	set cultureName(v: string) {
		this.i.cultureName = v;
	}
	/**
	 * Gets or sets an API key required by the Bing Maps imagery service.
	 * This key must be obtained from the http://www.bingmapsportal.com website.
	*/
	get apiKey() : string {
		return (this.i.apiKey as string);
	}
	set apiKey(v: string) {
		this.i.apiKey = v;
	}
	/**
	 * Gets or sets a map style of the Bing Maps imagery tiles.  For example: Aerial, AerialWithLabels, or Road map style.
	*/
	get imageryStyle() : BingMapsImageryStyle {
		return this.i.imageryStyle;
	}
	set imageryStyle(v: BingMapsImageryStyle) {
		this.i.imageryStyle = ensureEnum<BingMapsImageryStyle>(BingMapsImageryStyle_$type, v);
	}
	/**
	 * Will Connect to the Bing Rest API and retrieve the required TilePath and Subdomains from the service.  This requires a valid API key to already be set.
	
	*/
	public requestMapSettings() {
		this.i.requestMapSettings();
	}
}
