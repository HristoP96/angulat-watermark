import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGeographicMapImagery } from "./igx-geographic-map-imagery";
import { ArcGISOnlineMapImagery as ArcGISOnlineMapImagery_internal } from "./ArcGISOnlineMapImagery";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * UI element class used to display ArcGIS Online Map imagery in the IgxGeographicMap.Component
*/
export class IgxArcGISOnlineMapImagery extends IgxGeographicMapImagery
{

protected createImplementation() : ArcGISOnlineMapImagery_internal
{
	return new ArcGISOnlineMapImagery_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ArcGISOnlineMapImagery_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the map tile server uri.
	*/
	get mapServerUri() : string {
		return (this.i.mapServerUri as string);
	}
	set mapServerUri(v: string) {
		this.i.mapServerUri = v;
	}
	/**
	 * Gets or sets the UserName.
	*/
	get userName() : string {
		return (this.i.userName as string);
	}
	set userName(v: string) {
		this.i.userName = v;
	}
	/**
	 * Gets or sets the Password.
	*/
	get password() : string {
		return (this.i.password as string);
	}
	set password(v: string) {
		this.i.password = v;
	}
	/**
	 * Gets or sets the UserToken.
	*/
	get userToken() : string {
		return (this.i.userToken as string);
	}
	set userToken(v: string) {
		this.i.userToken = v;
	}
	/**
	 * Gets or sets the IsMapPublic variable.  A value of false requires authentication parameters.
	*/
	get isMapPublic() : boolean {
		return (this.i.isMapPublic as boolean);
	}
	set isMapPublic(v: boolean) {
		this.i.isMapPublic = ensureBool(v);
	}
	/**
	 * Gets or Sets the Default Token Timeout before the Token Expires, this value is in Minutes
	*/
	get defaultTokenTimeout() : number {
		return (this.i.defaultTokenTimeout as number);
	}
	set defaultTokenTimeout(v: number) {
		this.i.defaultTokenTimeout = +v;
	}
	/**
	 * Gets or Sets the current endpoint to retrieve the token.
	*/
	get tokenGenerationEndPoint() : string {
		return (this.i.tokenGenerationEndPoint as string);
	}
	set tokenGenerationEndPoint(v: string) {
		this.i.tokenGenerationEndPoint = v;
	}
	/**
	 * Contains the User Supplied Referer Uri to be used in Token Generation.
	*/
	get refererUri() : string {
		return (this.i.refererUri as string);
	}
	set refererUri(v: string) {
		this.i.refererUri = v;
	}
	/**
	 * Retreives a new token based on the preconfigured parameters and updates the UserToken field, Normal this is called automatically.
	 * The is provided to the end-user to allow them to reteive tokens on their onw.
	
	*/
	public acquireNewToken() {
		this.i.acquireNewToken();
	}
}
