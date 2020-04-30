/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { PropertyPath } from "./PropertyPath";

/**
 * @hidden 
 */
export class Binding extends Base {
	static $t: Type = markType(Binding, 'Binding');
	constructor(initNumber: number);
	constructor(initNumber: number, path: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let path: string = <string>_rest[0];
				this._path = new PropertyPath(path);
			}
			break;

		}

	}
	_source: any = null;
	get source(): any {
		return this._source;
	}
	set source(value: any) {
		this._source = value;
	}
	_path: PropertyPath = null;
	get path(): PropertyPath {
		return this._path;
	}
	set path(value: PropertyPath) {
		this._path = value;
	}
	_satisfied: boolean = false;
	get satisfied(): boolean {
		return this._satisfied;
	}
	set satisfied(value: boolean) {
		this._satisfied = value;
	}
}


