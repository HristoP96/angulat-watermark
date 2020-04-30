/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { SeriesRenderingArguments } from "./SeriesRenderingArguments";

/**
 * @hidden 
 */
export class SeriesRenderer$2<TFrame, TView> extends Base {
	static $t: Type = markType(SeriesRenderer$2, 'SeriesRenderer$2');
	protected $tFrame: Type = null;
	protected $tView: Type = null;
	private _prepareFrame: (arg1: TFrame, arg2: TView) => void = null;
	get prepareFrame(): (arg1: TFrame, arg2: TView) => void {
		return this._prepareFrame;
	}
	set prepareFrame(value: (arg1: TFrame, arg2: TView) => void) {
		this._prepareFrame = value;
	}
	private _renderFrame: (arg1: TFrame, arg2: TView) => void = null;
	get renderFrame(): (arg1: TFrame, arg2: TView) => void {
		return this._renderFrame;
	}
	set renderFrame(value: (arg1: TFrame, arg2: TView) => void) {
		this._renderFrame = value;
	}
	private _calculateBuckets: (arg1: TFrame) => void = null;
	get calculateBuckets(): (arg1: TFrame) => void {
		return this._calculateBuckets;
	}
	set calculateBuckets(value: (arg1: TFrame) => void) {
		this._calculateBuckets = value;
	}
	private _startupAnimation: () => void = null;
	get startupAnimation(): () => void {
		return this._startupAnimation;
	}
	set startupAnimation(value: () => void) {
		this._startupAnimation = value;
	}
	private _animationActive: () => boolean = null;
	get animationActive(): () => boolean {
		return this._animationActive;
	}
	set animationActive(value: () => boolean) {
		this._animationActive = value;
	}
	private _checkFlush: () => void = null;
	get checkFlush(): () => void {
		return this._checkFlush;
	}
	set checkFlush(value: () => void) {
		this._checkFlush = value;
	}
	constructor($tFrame: Type, $tView: Type, initNumber: number, prepare: (arg1: TFrame, arg2: TView) => void, render: (arg1: TFrame, arg2: TView) => void, animationActive: () => boolean, startupAnimation: () => void, checkFlush: () => void);
	constructor($tFrame: Type, $tView: Type, initNumber: number, prepare: (arg1: TFrame, arg2: TView) => void, render: (arg1: TFrame, arg2: TView) => void, animationActive: () => boolean, startupAnimation: () => void, checkFlush: () => void, calculateBuckets: (arg1: TFrame) => void);
	constructor($tFrame: Type, $tView: Type, initNumber: number, ..._rest: any[]);
	constructor($tFrame: Type, $tView: Type, initNumber: number, ..._rest: any[]) {
		super();
		this.$tFrame = $tFrame;
		this.$tView = $tView;
		this.$type = this.$type.specialize(this.$tFrame, this.$tView);
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let prepare: (arg1: TFrame, arg2: TView) => void = <(arg1: TFrame, arg2: TView) => void>_rest[0];
				let render: (arg1: TFrame, arg2: TView) => void = <(arg1: TFrame, arg2: TView) => void>_rest[1];
				let animationActive: () => boolean = <() => boolean>_rest[2];
				let startupAnimation: () => void = <() => void>_rest[3];
				let checkFlush: () => void = <() => void>_rest[4];
				this.prepareFrame = prepare;
				this.renderFrame = render;
				this.calculateBuckets = (f: TFrame) => {
				};
				this.animationActive = animationActive;
				this.startupAnimation = startupAnimation;
				this.checkFlush = checkFlush;
			}
			break;

			case 1:
			{
				let prepare: (arg1: TFrame, arg2: TView) => void = <(arg1: TFrame, arg2: TView) => void>_rest[0];
				let render: (arg1: TFrame, arg2: TView) => void = <(arg1: TFrame, arg2: TView) => void>_rest[1];
				let animationActive: () => boolean = <() => boolean>_rest[2];
				let startupAnimation: () => void = <() => void>_rest[3];
				let checkFlush: () => void = <() => void>_rest[4];
				let calculateBuckets: (arg1: TFrame) => void = <(arg1: TFrame) => void>_rest[5];
				this.prepareFrame = prepare;
				this.renderFrame = render;
				this.calculateBuckets = calculateBuckets;
				this.animationActive = animationActive;
				this.startupAnimation = startupAnimation;
				this.checkFlush = checkFlush;
			}
			break;

		}

	}
	render(args: SeriesRenderingArguments, previousFrame: TFrame, currentFrame: TFrame, transitionFrame: TFrame, view: TView): { p1?: TFrame; p2?: TFrame; p3?: TFrame; } {
		let totalMilliseconds: number = 0;
		totalMilliseconds = args.transitionDuration;
		if (args.animate && totalMilliseconds > 0 && !args.skipPrepare) {
			let prevFrame: TFrame = previousFrame;
			if (this.animationActive()) {
				this.checkFlush();
				previousFrame = transitionFrame;
				transitionFrame = prevFrame;
			} else {
				previousFrame = currentFrame;
				currentFrame = prevFrame;
			}
			this.calculateBuckets(currentFrame);
			this.prepareFrame(currentFrame, view);
			this.startupAnimation();
		} else {
			if (!args.skipPrepare) {
				this.calculateBuckets(currentFrame);
				this.prepareFrame(currentFrame, view);
			}
			this.renderFrame(currentFrame, view);
		}
		return {
			p1: previousFrame,
			p2: currentFrame,
			p3: transitionFrame

		};
	}
}


