/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, runOn, String_$type, Delegate_$type, Type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TileWorkSettings } from "./TileWorkSettings";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { LinkedList$1 } from "./LinkedList$1";
import { HeatTileGeneratorWorker } from "./HeatTileGeneratorWorker";
import { List$1 } from "./List$1";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { HeatTileImageCreatedEventArgs } from "./HeatTileImageCreatedEventArgs";
import { ITileWorkCompletedSink, ITileWorkCompletedSink_$type } from "./ITileWorkCompletedSink";

/**
 * @hidden 
 */
export class HeatTileGeneratorWorkerManager extends Base {
	static $t: Type = markType(HeatTileGeneratorWorkerManager, 'HeatTileGeneratorWorkerManager');
	constructor() {
		super();
	}
	private _shouldUseWorkers: boolean = true;
	get shouldUseWorkers(): boolean {
		return this._shouldUseWorkers;
	}
	set shouldUseWorkers(value: boolean) {
		this._shouldUseWorkers = value;
	}
	private _webWorkerScriptPath: string = null;
	get webWorkerScriptPath(): string {
		return this._webWorkerScriptPath;
	}
	set webWorkerScriptPath(value: string) {
		this._webWorkerScriptPath = value;
	}
	private _webWorkerInstance: any = null;
	get webWorkerInstance(): any {
		return this._webWorkerInstance;
	}
	set webWorkerInstance(value: any) {
		this._webWorkerInstance = value;
	}
	private _supportsTransferable: boolean = false;
	private _supportsWorkers: boolean = false;
	private _worker: any = null;
	private _checked: boolean = false;
	private checkForWebWorkers(): void {
		if (!this._checked) {
			this._checked = true;
			if (<boolean>((window as any).Worker)) {
				this._supportsWorkers = true;
			}
			if (this._supportsWorkers && this.shouldUseWorkers) {
				this.createWorker();
				
					var test = new ArrayBuffer(1);
					this._worker.postMessage(test, [test]);
					if (test.byteLength == 0)
					{
						this._supportsTransferable = true;
					}
					;
			}
			if (!this._supportsTransferable) {
				this._shouldUseWorkers = false;
			}
		}
	}
	private createWorker(): void {
		if (this.webWorkerScriptPath == null && this.webWorkerInstance == null) {
			throw new Error('HeatTileGenerator wants to use web workers, but webWorkerScriptPath and webWorkerInstance were not specified. Either specify the path, an instance, or set allowWebWorkers to false');
		}
		if (this.webWorkerInstance != null) {
			this._worker = this.webWorkerInstance;
		} else {
			let path_ = this.webWorkerScriptPath;
			this._worker = new Worker(path_);
		}
		this._worker.postMessage = this._worker.webkitPostMessage || this._worker.postMessage;
		let onMessage_: (arg1: any) => void = runOn(this, this.onMessage);
		this._worker.onmessage = onMessage_;
	}
	private onMessage(args_: any): void {
		let data_ = args_.data;
		let outerArgs = new HeatTileImageCreatedEventArgs();
		outerArgs.imageData = <number[]><any>(data_.imageData == null ? null : new Uint8ClampedArray(data_.imageData));
		outerArgs.z = <number>(data_.z);
		outerArgs.x = <number>(data_.x);
		outerArgs.y = <number>(data_.y);
		outerArgs.url = <string>(data_.url);
		outerArgs.globalMinimumValue = <number>(data_.globalMinimumValue);
		outerArgs.globalMaximumValue = <number>(data_.globalMaximumValue);
		outerArgs.globalMaximumValueLongitude = <number>(data_.globalMaximumValueLongitude);
		outerArgs.globalMaximumValueLatitude = <number>(data_.globalMaximumValueLatitude);
		outerArgs.globalMinimumValueLongitude = <number>(data_.globalMinimumValueLongitude);
		outerArgs.globalMinimumValueLatitude = <number>(data_.globalMinimumValueLatitude);
		let key = <string>(data_.messageId.toString());
		if (!this._waiting.containsKey(key)) {
			return;
		}
		let outerSettings = this._waiting.item(key);
		let outerCallback = this._waitingCallbacks.item(key);
		this._waiting.removeItem(key);
		this._waitingCallbacks.removeItem(key);
		outerArgs.image = outerSettings.image;
		outerCallback(this, outerArgs);
	}
	private ensureWorkerStatus(): void {
		this.checkForWebWorkers();
		if (this.shouldUseWorkers && this._worker == null) {
			this.createWorker();
		}
		if (!this.shouldUseWorkers && this._worker != null) {
			this._worker.terminate();
			this._worker.onmessage = null;
			this._worker = null;
		}
	}
	private toDoubleArray(arr_: any): any {
		return new Float64Array(arr_).buffer;
	}
	private _messageId: number = 0;
	private _waiting: Dictionary$2<string, TileWorkSettings> = new Dictionary$2<string, TileWorkSettings>(String_$type, (<any>TileWorkSettings).$type, 0);
	private _waitingCallbacks: Dictionary$2<string, (sender: any, eventArgs: TileImageCreatedEventArgs) => void> = new Dictionary$2<string, (sender: any, eventArgs: TileImageCreatedEventArgs) => void>(String_$type, Delegate_$type, 0);
	private addWorkWebWorker(settings: TileWorkSettings, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void): void {
		this._messageId++;
		if (this._messageId >= 0x7FFFFFFF) {
			this._messageId = 1;
		}
		this._waiting.addItem(this._messageId.toString(), settings);
		this._waitingCallbacks.addItem(this._messageId.toString(), onCreated);
		let messageId_ = this._messageId;
		let innerSettings_ = settings.flatten();
		innerSettings_.messageId = messageId_;
		innerSettings_.transferableSupported = this._supportsTransferable;
		if (settings.isNewData) {
			innerSettings_.latitudes = this.toDoubleArray(innerSettings_.latitudes);
			innerSettings_.longitudes = this.toDoubleArray(innerSettings_.longitudes);
			innerSettings_.values = this.toDoubleArray(innerSettings_.values);
		} else {
			innerSettings_.latitudes = null;
			innerSettings_.longitudes = null;
			innerSettings_.values = null;
		}
		if (this._supportsTransferable && settings.isNewData) {
			this._worker.postMessage(innerSettings_,
							[innerSettings_.latitudes,
							innerSettings_.longitudes,
							innerSettings_.values]);
		} else {
			this._worker.postMessage(innerSettings_);
		}
	}
	private cancelTileWebWorker(z_: number, x_: number, y_: number): void {
		let cancelMsg_ = {
				cancelTile: true,
				z: z_,
				x: x_,
				y: y_
			};
		this._worker.postMessage(cancelMsg_);
	}
	getTile(settings: TileWorkSettings, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void): void {
		this.ensureWorkerStatus();
		if (this.shouldUseWorkers) {
			this.addWorkWebWorker(settings, onCreated, onCreating);
		} else {
			this.addWork(settings, onCreated, onCreating);
		}
	}
	private _workers: LinkedList$1<HeatTileGeneratorWorker> = new LinkedList$1<HeatTileGeneratorWorker>((<any>HeatTileGeneratorWorker).$type);
	private _nodeLookup: Dictionary$2<string, List$1<LinkedListNode$1<HeatTileGeneratorWorker>>> = new Dictionary$2<string, List$1<LinkedListNode$1<HeatTileGeneratorWorker>>>(String_$type, (<any>List$1).$type.specialize((<any>LinkedListNode$1).$type.specialize((<any>HeatTileGeneratorWorker).$type)), 0);
	private processWorkers(): void {
		if (this._workers.first != null) {
			let toProcess = this._workers.first;
			this._workers.remove(toProcess);
			let settings = toProcess.value.settings;
			if (this._nodeLookup.containsKey(settings.z + "_" + settings.x + "_" + settings.y)) {
				let list = this._nodeLookup.item(settings.z + "_" + settings.x + "_" + settings.y);
				list.remove(toProcess);
				if (list.count == 0) {
					this._nodeLookup.removeItem(settings.z + "_" + settings.x + "_" + settings.y);
				}
			}
			toProcess.value.doWork();
		}
		if (this._workers.first != null) {
			window.setTimeout(() => this.processWorkers(), 16);
		}
	}
	private addWork(settings: TileWorkSettings, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void): void {
		{
			let worker: HeatTileGeneratorWorker = new HeatTileGeneratorWorker(settings);
			worker.completedSink = new TileWorkCompletedSink(this, onCreated);
			this._workers.addLast(worker);
			let list: List$1<LinkedListNode$1<HeatTileGeneratorWorker>>;
			let key = worker.settings.z + "_" + worker.settings.x + "_" + worker.settings.y;
			if (this._nodeLookup.containsKey(key)) {
				list = this._nodeLookup.item(key);
			} else {
				list = new List$1<LinkedListNode$1<HeatTileGeneratorWorker>>((<any>LinkedListNode$1).$type.specialize((<any>HeatTileGeneratorWorker).$type), 0);
				this._nodeLookup.addItem(key, list);
			}
			list.add(this._workers.last);
			window.setTimeout(() => this.processWorkers(), 16);
		}
	}
	destroy(): void {
		if (this._worker != null) {
			this._worker.terminate();
			this._worker = null;
		}
		this._waiting.clear();
		this._waitingCallbacks.clear();
	}
	cancelTile(z: number, x: number, y: number): void {
		this.ensureWorkerStatus();
		if (this.shouldUseWorkers) {
			this.cancelTileWebWorker(z, x, y);
		} else {
			if (this._nodeLookup.containsKey(z + "_" + x + "_" + y)) {
				let list = this._nodeLookup.item(z + "_" + x + "_" + y);
				for (let i = list.count - 1; i >= 0; i--) {
					let curr = list._inner[i];
					if (curr.value.settings.testRun) {
						continue;
					}
					list.removeAt(i);
					let removed = curr.value;
					this._workers.remove(curr);
					removed.completedSink = null;
				}
			}
		}
	}
}

/**
 * @hidden 
 */
export class TileWorkCompletedSink extends Base implements ITileWorkCompletedSink {
	static $t: Type = markType(TileWorkCompletedSink, 'TileWorkCompletedSink', (<any>Base).$type, [ITileWorkCompletedSink_$type]);
	private _manager: HeatTileGeneratorWorkerManager = null;
	private _onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void = null;
	constructor(manager: HeatTileGeneratorWorkerManager, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void) {
		super();
		this._manager = manager;
		this._onCreated = onCreated;
	}
	onCompleted(args: TileImageCreatedEventArgs): void {
		this._onCreated(this._manager, args);
	}
}


