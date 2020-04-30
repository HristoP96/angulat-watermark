/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, fromEnum, markType } from "igniteui-core/type";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class DictInterpolator$3<TKey, TValue, TFrame> extends Base {
	static $t: Type = markType(DictInterpolator$3, 'DictInterpolator$3');
	protected $tKey: Type = null;
	protected $tValue: Type = null;
	protected $tFrame: Type = null;
	constructor($tKey: Type, $tValue: Type, $tFrame: Type, interpolatePointStrat: (arg1: TValue, arg2: number, arg3: TValue, arg4: TValue, arg5: TFrame, arg6: TFrame) => void, getKeyStrat: (arg1: TValue) => TKey, validPointStrat: (arg1: TValue) => boolean, createValueStrat: () => TValue) {
		super();
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$tFrame = $tFrame;
		this.$type = this.$type.specialize(this.$tKey, this.$tValue, this.$tFrame);
		this.interpolatePointStrat = interpolatePointStrat;
		this.getKeyStrat = getKeyStrat;
		this.validPointStrat = validPointStrat;
		this.createValueStrat = createValueStrat;
	}
	private _interpolatePointStrat: (arg1: TValue, arg2: number, arg3: TValue, arg4: TValue, arg5: TFrame, arg6: TFrame) => void = null;
	private get interpolatePointStrat(): (arg1: TValue, arg2: number, arg3: TValue, arg4: TValue, arg5: TFrame, arg6: TFrame) => void {
		return this._interpolatePointStrat;
	}
	private set interpolatePointStrat(value: (arg1: TValue, arg2: number, arg3: TValue, arg4: TValue, arg5: TFrame, arg6: TFrame) => void) {
		this._interpolatePointStrat = value;
	}
	private _getKeyStrat: (arg1: TValue) => TKey = null;
	private get getKeyStrat(): (arg1: TValue) => TKey {
		return this._getKeyStrat;
	}
	private set getKeyStrat(value: (arg1: TValue) => TKey) {
		this._getKeyStrat = value;
	}
	private _validPointStrat: (arg1: TValue) => boolean = null;
	private get validPointStrat(): (arg1: TValue) => boolean {
		return this._validPointStrat;
	}
	private set validPointStrat(value: (arg1: TValue) => boolean) {
		this._validPointStrat = value;
	}
	private _createValueStrat: () => TValue = null;
	private get createValueStrat(): () => TValue {
		return this._createValueStrat;
	}
	private set createValueStrat(value: () => TValue) {
		this._createValueStrat = value;
	}
	interpolate(target: IDictionary$2<TKey, TValue>, p: number, min: IDictionary$2<TKey, TValue>, max: IDictionary$2<TKey, TValue>, minFrame: TFrame, maxFrame: TFrame): void {
		let removeFromTarget: List$1<TKey> = new List$1<TKey>(this.$tKey, 0);
		for (let key of fromEnum<TKey>(target.keys)) {
			let minValue: TValue;
			let maxValue: TValue;
			let targetValue: TValue = target.item(key);
			let minContains: boolean = ((() => { let $ret = min.tryGetValue(key, minValue); minValue = $ret.p1; return $ret.ret; })());
			let maxContains: boolean = ((() => { let $ret = max.tryGetValue(key, maxValue); maxValue = $ret.p1; return $ret.ret; })());
			if (!minContains && !maxContains) {
				removeFromTarget.add(key);
			} else {
				this.interpolatePointStrat(targetValue, p, minValue, maxValue, minFrame, maxFrame);
				if (!this.validPointStrat(targetValue)) {
					removeFromTarget.add(key);
				}
			}
		}
		for (let key1 of fromEnum<TKey>(removeFromTarget)) {
			target.removeItem(key1);
		}
		for (let key2 of fromEnum<TKey>(min.keys)) {
			let minValue1: TValue = min.item(key2);
			let maxValue1: TValue;
			let targetValue1: TValue;
			let $ret = max.tryGetValue(key2, maxValue1);
			maxValue1 = $ret.p1;
			let targetContains: boolean = ((() => { let $ret = target.tryGetValue(key2, targetValue1); targetValue1 = $ret.p1; return $ret.ret; })());
			if (!targetContains) {
				targetValue1 = this.createValueStrat();
				this.interpolatePointStrat(targetValue1, p, minValue1, maxValue1, minFrame, maxFrame);
				if (!this.validPointStrat(targetValue1)) {
					continue;
				}
				target.addItem(this.getKeyStrat(targetValue1), targetValue1);
			}
		}
		for (let key3 of fromEnum<TKey>(max.keys)) {
			let maxValue2: TValue = max.item(key3);
			let minValue2: TValue;
			let targetValue2: TValue;
			let minContains1: boolean = ((() => { let $ret = min.tryGetValue(key3, minValue2); minValue2 = $ret.p1; return $ret.ret; })());
			let targetContains1: boolean = ((() => { let $ret = target.tryGetValue(key3, targetValue2); targetValue2 = $ret.p1; return $ret.ret; })());
			if (!targetContains1 && !minContains1) {
				targetValue2 = this.createValueStrat();
				this.interpolatePointStrat(targetValue2, p, minValue2, maxValue2, minFrame, maxFrame);
				if (!this.validPointStrat(targetValue2)) {
					continue;
				}
				target.addItem(this.getKeyStrat(targetValue2), targetValue2);
			}
		}
	}
}


