/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { ISupportsErrorBars, ISupportsErrorBars_$type } from "./ISupportsErrorBars";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";
import { IProvidesViewport, IProvidesViewport_$type } from "./IProvidesViewport";
import { DefaultSupportsMarkers } from "./DefaultSupportsMarkers";
import { DefaultProvidesViewport } from "./DefaultProvidesViewport";
import { DefaultSupportsErrorBars } from "./DefaultSupportsErrorBars";
import { Frame } from "./Frame";
import { SeriesView } from "./SeriesView";

/**
 * @hidden 
 */
export abstract class FramePreparer extends Base {
	static $t: Type = markType(FramePreparer, 'FramePreparer');
	constructor(initNumber: number, host: any);
	constructor(initNumber: number, markersHost: ISupportsMarkers, viewportHost: IProvidesViewport, errorBarsHost: ISupportsErrorBars);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let host: any = <any>_rest[0];
				let $outerArgs = <any[]>[ typeCast<ISupportsMarkers>(ISupportsMarkers_$type, host), typeCast<IProvidesViewport>(IProvidesViewport_$type, host), typeCast<ISupportsErrorBars>(ISupportsErrorBars_$type, host) ];
				{
					let markersHost: ISupportsMarkers = <ISupportsMarkers>$outerArgs[0];
					let viewportHost: IProvidesViewport = <IProvidesViewport>$outerArgs[1];
					let errorBarsHost: ISupportsErrorBars = <ISupportsErrorBars>$outerArgs[2];
					this.markersHost = new DefaultSupportsMarkers();
					this.viewportHost = new DefaultProvidesViewport();
					this.errorBarsHost = new DefaultSupportsErrorBars();
					if (markersHost != null) {
						this.markersHost = markersHost;
					}
					if (viewportHost != null) {
						this.viewportHost = viewportHost;
					}
					if (errorBarsHost != null) {
						this.errorBarsHost = errorBarsHost;
					}
				}
			}
			break;

			case 1:
			{
				let markersHost: ISupportsMarkers = <ISupportsMarkers>_rest[0];
				let viewportHost: IProvidesViewport = <IProvidesViewport>_rest[1];
				let errorBarsHost: ISupportsErrorBars = <ISupportsErrorBars>_rest[2];
				this.markersHost = new DefaultSupportsMarkers();
				this.viewportHost = new DefaultProvidesViewport();
				this.errorBarsHost = new DefaultSupportsErrorBars();
				if (markersHost != null) {
					this.markersHost = markersHost;
				}
				if (viewportHost != null) {
					this.viewportHost = viewportHost;
				}
				if (errorBarsHost != null) {
					this.errorBarsHost = errorBarsHost;
				}
			}
			break;

		}

	}
	private _errorBarsHost: ISupportsErrorBars = null;
	get errorBarsHost(): ISupportsErrorBars {
		return this._errorBarsHost;
	}
	set errorBarsHost(value: ISupportsErrorBars) {
		this._errorBarsHost = value;
	}
	private _markersHost: ISupportsMarkers = null;
	get markersHost(): ISupportsMarkers {
		return this._markersHost;
	}
	set markersHost(value: ISupportsMarkers) {
		this._markersHost = value;
	}
	private _viewportHost: IProvidesViewport = null;
	get viewportHost(): IProvidesViewport {
		return this._viewportHost;
	}
	set viewportHost(value: IProvidesViewport) {
		this._viewportHost = value;
	}
	abstract prepareFrame(frame: Frame, view: SeriesView): void;
}


