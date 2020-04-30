/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

let ok: any;
/**
 * @hidden 
 */
export class QUnitHelper extends Base {
	static $t: Type = markType(QUnitHelper, 'QUnitHelper');
	static assert: any = null;
	static init(assert: any): void {
		QUnitHelper.assert = assert;
		QUnitHelper.ok(true, null);
	}
	static ok(passed: boolean, message: string): void {
		if (QUnitHelper.assert != null) {
			QUnitHelper.assert.ok(passed,message);
		} else {
			ok(passed,message);
		}
	}
	static async(): () => void {
		return <() => void>(QUnitHelper.assert.async());
	}
}


