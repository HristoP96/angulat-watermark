/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, IEnumerable$1, IEnumerable$1_$type } from "./type";
import { ReadOnlyCollection$1 } from "./ReadOnlyCollection$1";

/**
 * @hidden 
 */
export abstract class ExpressionSyntax extends Base {
	static $t: Type = markType(ExpressionSyntax, 'ExpressionSyntax');
	static call(type: Type, methodName: string, typeArguments: Type[], ...args: ExpressionSyntax[]): MethodCallExpression {
		return null;
	}
	static lambda(body: ExpressionSyntax, ...parameters: ParameterExpression[]): LambdaExpression {
		return null;
	}
	static property(ExpressionSyntax: ExpressionSyntax, propertyName: string): MemberExpression {
		return null;
	}
	static parameter(type: Type): ParameterExpression {
		return null;
	}
	static parameter1(type: Type, name: string): ParameterExpression {
		return null;
	}
}

/**
 * @hidden 
 */
export abstract class LambdaExpression extends ExpressionSyntax {
	static $t: Type = markType(LambdaExpression, 'LambdaExpression', (<any>ExpressionSyntax).$type);
}

/**
 * @hidden 
 */
export class MemberExpression extends ExpressionSyntax {
	static $t: Type = markType(MemberExpression, 'MemberExpression', (<any>ExpressionSyntax).$type);
	private _expressionSyntax: ExpressionSyntax = null;
	get expressionSyntax(): ExpressionSyntax {
		return this._expressionSyntax;
	}
	set expressionSyntax(value: ExpressionSyntax) {
		this._expressionSyntax = value;
	}
	update(ExpressionSyntax: ExpressionSyntax): MemberExpression {
		return null;
	}
}

/**
 * @hidden 
 */
export class MethodCallExpression extends ExpressionSyntax {
	static $t: Type = markType(MethodCallExpression, 'MethodCallExpression', (<any>ExpressionSyntax).$type);
	private _$arguments: ReadOnlyCollection$1<ExpressionSyntax> = null;
	get $arguments(): ReadOnlyCollection$1<ExpressionSyntax> {
		return this._$arguments;
	}
	set $arguments(value: ReadOnlyCollection$1<ExpressionSyntax>) {
		this._$arguments = value;
	}
	private _object1: ExpressionSyntax = null;
	get object1(): ExpressionSyntax {
		return this._object1;
	}
	set object1(value: ExpressionSyntax) {
		this._object1 = value;
	}
	update(object: ExpressionSyntax, args: IEnumerable$1<ExpressionSyntax>): MethodCallExpression {
		return null;
	}
}

/**
 * @hidden 
 */
export class ParameterExpression extends ExpressionSyntax {
	static $t: Type = markType(ParameterExpression, 'ParameterExpression', (<any>ExpressionSyntax).$type);
	private _isByRef: boolean = false;
	get isByRef(): boolean {
		return this._isByRef;
	}
	set isByRef(value: boolean) {
		this._isByRef = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
}


