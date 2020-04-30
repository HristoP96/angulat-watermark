/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeGetValue, Type, markType } from "./type";
import { TileWorkSettings } from "./TileWorkSettings";
import { Color } from "./Color";
import { HeatTileGeneratorWorker } from "./HeatTileGeneratorWorker";
import { HeatTileScaler } from "./HeatTileScaler";
import { Rect } from "./Rect";
import { ITileWorkCompletedSink, ITileWorkCompletedSink_$type } from "./ITileWorkCompletedSink";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { HeatTileImageCreatedEventArgs } from "./HeatTileImageCreatedEventArgs";

/**
 * @hidden 
 */
export class HeatTileGeneratorWebWorker extends Base {
	static $t: Type = markType(HeatTileGeneratorWebWorker, 'HeatTileGeneratorWebWorker');
	private static _scaler: HeatTileScaler = new HeatTileScaler();
	private static _workers: HeatTileGeneratorWorker[] = <HeatTileGeneratorWorker[]>[];
	private static _postmessage: any = null;
	static get postmessage(): any {
		return HeatTileGeneratorWebWorker._postmessage;
	}
	static set postmessage(value: any) {
		HeatTileGeneratorWebWorker._postmessage = value;
	}
	private static _yValues: number[] = null;
	private static _xValues: number[] = null;
	private static _values: number[] = null;
	static onmessage(args_: any): void {
		let data_ = args_.data;
		let cancelTile: boolean = <boolean>(data_.cancelTile);
		let z = <number>(data_.z);
		let y = <number>(data_.y);
		let x = <number>(data_.x);
		if (cancelTile) {
			for (let i_ = 0; i_ < HeatTileGeneratorWebWorker._workers.length; i_++) {
				let currWorker = HeatTileGeneratorWebWorker._workers[i_];
				if (currWorker.settings.testRun) {
					continue;
				}
				if (currWorker.settings.z == z && currWorker.settings.x == x && currWorker.settings.y == y) {
					let workers_ = HeatTileGeneratorWebWorker._workers;
					workers_.splice(i_, 1);
					i_--;
				}
			}
		}
		let innerSettings = new TileWorkSettings();
		let settings: any = <any><any>data_;
		if (!<boolean>settings["messageId"]) {
			return;
		}
		if (<boolean>settings["isNewData"]) {
			let yValues_ = settings["yValues"];
			let xValues_ = settings["xValues"];
			let values_ = settings["values"];
			HeatTileGeneratorWebWorker._yValues = <number[]><any>(new Float64Array(yValues_));
			HeatTileGeneratorWebWorker._xValues = <number[]><any>(new Float64Array(xValues_));
			HeatTileGeneratorWebWorker._values = <number[]><any>(new Float64Array(values_));
		}
		let outerColors: any[] = <any[]>settings["scaleColors"];
		let scaleColors: Color[] = <Color[]>new Array(outerColors.length);
		for (let i = 0; i < outerColors.length; i++) {
			scaleColors[i] = Color.fromArgb(typeGetValue(outerColors[i]["a"]), typeGetValue(outerColors[i]["r"]), typeGetValue(outerColors[i]["g"]), typeGetValue(outerColors[i]["b"]));
		}
		innerSettings.scaler = HeatTileGeneratorWebWorker._scaler;
		innerSettings.blurRadius = <number>settings["blurRadius"];
		innerSettings.maxBlurRadius = <number>settings["maxBlurRadius"];
		innerSettings.useBlurRadiusAdjustedForZoom = <boolean>(settings["useBlurRadiusAdjustedForZoom"]);
		innerSettings.minimumColor = Color.fromArgb(typeGetValue((<any>settings["minimumColor"])["a"]), typeGetValue((<any>settings["minimumColor"])["r"]), typeGetValue((<any>settings["minimumColor"])["g"]), typeGetValue((<any>settings["minimumColor"])["b"]));
		innerSettings.maximumColor = Color.fromArgb(typeGetValue((<any>settings["maximumColor"])["a"]), typeGetValue((<any>settings["maximumColor"])["r"]), typeGetValue((<any>settings["maximumColor"])["g"]), typeGetValue((<any>settings["maximumColor"])["b"]));
		innerSettings.tileViewport = new Rect(0, <number>(<any>settings["tileViewport"])["left"], <number>(<any>settings["tileViewport"])["top"], <number>(<any>settings["tileViewport"])["width"], <number>(<any>settings["tileViewport"])["height"]);
		innerSettings.yValues = HeatTileGeneratorWebWorker._yValues;
		innerSettings.xValues = HeatTileGeneratorWebWorker._xValues;
		innerSettings.values = HeatTileGeneratorWebWorker._values;
		innerSettings.minimumVisibleLatitude = <number>settings["minimumVisibleLatitude"];
		innerSettings.minimumVisibleLongitude = <number>settings["minimumVisibleLongitude"];
		innerSettings.maximumVisibleLatitude = <number>settings["maximumVisibleLatitude"];
		innerSettings.maximumVisibleLongitude = <number>settings["maximumVisibleLongitude"];
		innerSettings.z = typeGetValue(settings["z"]);
		innerSettings.x = typeGetValue(settings["x"]);
		innerSettings.y = typeGetValue(settings["y"]);
		innerSettings.window = new Rect(0, <number>(<any>settings["window"])["left"], <number>(<any>settings["window"])["top"], <number>(<any>settings["window"])["width"], <number>(<any>settings["window"])["height"]);
		innerSettings.testRun = <boolean>settings["testRun"];
		innerSettings.globalMinimum = <number>settings["globalMinimum"];
		innerSettings.globalMaximum = <number>settings["globalMaximum"];
		innerSettings.useGlobalMinMax = <boolean>settings["useGlobalMinMax"];
		innerSettings.minimumValue = <number>settings["minimumValue"];
		innerSettings.maximumValue = <number>settings["maximumValue"];
		innerSettings.scaleColorOffsets = <number[]>settings["scaleColorOffsets"];
		innerSettings.scaleColors = scaleColors;
		innerSettings.useLogarithmicScale = <boolean>settings["useLogarithmicScale"];
		innerSettings.logarithmBase = <number>settings["logarithmBase"];
		let worker = new HeatTileGeneratorWorker(innerSettings);
		worker.messageId = typeGetValue(settings["messageId"]);
		worker.transferableSupported = true;
		worker.completedSink = new CompletedSinkImpl(worker);
		let workersl_ = HeatTileGeneratorWebWorker._workers;
		let worker_ = worker;
		workersl_.push(worker_);
	}
	static start(): void {
		let workers_ = HeatTileGeneratorWebWorker._workers;
		
            setInterval(function () {
	            if (workers_.length > 0) {
		            var worker = workers_.shift();

		            worker.doWork();
		            worker.completedSink = null;
	            }
            }, 16);;
	}
}

/**
 * @hidden 
 */
export class CompletedSinkImpl extends Base implements ITileWorkCompletedSink {
	static $t: Type = markType(CompletedSinkImpl, 'CompletedSinkImpl', (<any>Base).$type, [ITileWorkCompletedSink_$type]);
	private _worker: HeatTileGeneratorWorker = null;
	constructor(worker: HeatTileGeneratorWorker) {
		super();
		this._worker = worker;
	}
	onCompleted(e: TileImageCreatedEventArgs): void {
		let args = <HeatTileImageCreatedEventArgs>e;
		let outerArgs: any = <any>{};
		let imageData_ = args.imageData;
		outerArgs["messageId"] = this._worker.messageId;
		outerArgs["imageData"] = (args.imageData == null ? null : (<any>(new Uint8ClampedArray(imageData_)))["buffer"]);
		outerArgs["z"] = args.z;
		outerArgs["x"] = args.x;
		outerArgs["y"] = args.y;
		outerArgs["url"] = args.url;
		outerArgs["globalMinimumValue"] = args.globalMinimumValue;
		outerArgs["globalMaximumValue"] = args.globalMaximumValue;
		outerArgs["globalMaximumValueLongitude"] = args.globalMaximumValueLongitude;
		outerArgs["globalMaximumValueLatitude"] = args.globalMaximumValueLatitude;
		outerArgs["globalMinimumValueLongitude"] = args.globalMinimumValueLongitude;
		outerArgs["globalMinimumValueLatitude"] = args.globalMinimumValueLatitude;
		if (this._worker.transferableSupported && outerArgs["imageData"] != null) {
			(<(arg1: any, arg2: any[]) => void>HeatTileGeneratorWebWorker.postmessage)(outerArgs, <any[]>[ outerArgs["imageData"] ]);
		} else {
			(<(arg1: any) => void>HeatTileGeneratorWebWorker.postmessage)(outerArgs);
		}
	}
}


