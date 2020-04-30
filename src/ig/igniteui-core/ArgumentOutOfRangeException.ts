/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ArgumentException } from "./ArgumentException";
import { Base, BaseError, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ArgumentOutOfRangeException extends ArgumentException {
	static $t: Type = markType(ArgumentOutOfRangeException, 'ArgumentOutOfRangeException', (<any>ArgumentException).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, argumentName: string);
	constructor(initNumber: number, paramName: string, errorMessage: string);
	constructor(initNumber: number, paramName: string, value: any, message: string);
	constructor(initNumber: number, message: string, innerException: BaseError);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(0);
			}
			break;

			case 1:
			{
				let argumentName: string = <string>_rest[0];
				super(1, argumentName + " is out of range.");
			}
			break;

			case 2:
			{
				let paramName: string = <string>_rest[0];
				let errorMessage: string = <string>_rest[1];
				super(1, errorMessage);
			}
			break;

			case 3:
			{
				let paramName: string = <string>_rest[0];
				let value: any = <any>_rest[1];
				let message: string = <string>_rest[2];
				let $outerArgs = <any[]>[ message, paramName ];
				{
					let paramName: string = <string>$outerArgs[0];
					let errorMessage: string = <string>$outerArgs[1];
					super(1, errorMessage);
				}
			}
			break;

			case 4:
			{
				let message: string = <string>_rest[0];
				let innerException: BaseError = <BaseError>_rest[1];
				super(3, message, innerException);
			}
			break;

		}

	}
}


