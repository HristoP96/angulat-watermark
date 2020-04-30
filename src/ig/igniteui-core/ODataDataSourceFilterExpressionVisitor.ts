/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FilterExpressionVisitor } from "./FilterExpressionVisitor";
import { DefaultODataLiteralEmitter } from "./DefaultODataLiteralEmitter";
import { ODataLiteralEmitter } from "./ODataLiteralEmitter";
import { StringBuilder } from "./StringBuilder";
import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Type, markType } from "./type";
import { IOperationFilterExpression } from "./IOperationFilterExpression";
import { FilterExpressionOperatorType } from "./FilterExpressionOperatorType";
import { IFilterExpression } from "./IFilterExpression";
import { IFunctionFilterExpression } from "./IFunctionFilterExpression";
import { FilterExpressionFunctionType } from "./FilterExpressionFunctionType";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { ILiteralFilterExpression } from "./ILiteralFilterExpression";
import { IPropertyReferenceFilterExpression } from "./IPropertyReferenceFilterExpression";

/**
 * @hidden 
 */
export class ODataDataSourceFilterExpressionVisitor extends FilterExpressionVisitor {
	static $t: Type = markType(ODataDataSourceFilterExpressionVisitor, 'ODataDataSourceFilterExpressionVisitor', (<any>FilterExpressionVisitor).$type);
	private _sb: StringBuilder = null;
	private _literalEmitter: ODataLiteralEmitter = null;
	constructor(initNumber: number);
	constructor(initNumber: number, literalEmitter: ODataLiteralEmitter);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this._literalEmitter = new DefaultODataLiteralEmitter();
				this._sb = new StringBuilder(0);
			}
			break;

			case 1:
			{
				let literalEmitter: ODataLiteralEmitter = <ODataLiteralEmitter>_rest[0];
				{
					this._literalEmitter = new DefaultODataLiteralEmitter();
					this._sb = new StringBuilder(0);
				}
				this._literalEmitter = literalEmitter;
			}
			break;

		}

	}
	toString(): string {
		return this._sb.toString();
	}
	visitOperationExpression(expression: IOperationFilterExpression): void {
		let isBinary: boolean = true;
		let operatorString: string = "";
		switch (expression.operator) {
			case FilterExpressionOperatorType.Add:
			operatorString = "add";
			break;

			case FilterExpressionOperatorType.And:
			operatorString = "and";
			break;

			case FilterExpressionOperatorType.Divide:
			operatorString = "div";
			break;

			case FilterExpressionOperatorType.None:

			case FilterExpressionOperatorType.Equal:
			operatorString = "eq";
			break;

			case FilterExpressionOperatorType.GreaterThan:
			operatorString = "gt";
			break;

			case FilterExpressionOperatorType.GreaterThanOrEqual:
			operatorString = "ge";
			break;

			case FilterExpressionOperatorType.Grouping:
			isBinary = false;
			break;

			case FilterExpressionOperatorType.LessThan:
			operatorString = "lt";
			break;

			case FilterExpressionOperatorType.LessThanOrEqual:
			operatorString = "le";
			break;

			case FilterExpressionOperatorType.Modulo:
			operatorString = "mod";
			break;

			case FilterExpressionOperatorType.Multiply:
			operatorString = "mul";
			break;

			case FilterExpressionOperatorType.Not:
			operatorString = "not";
			isBinary = false;
			break;

			case FilterExpressionOperatorType.NotEqual:
			operatorString = "ne";
			break;

			case FilterExpressionOperatorType.Or:
			operatorString = "or";
			break;

			case FilterExpressionOperatorType.Subtract:
			operatorString = "sub";
			break;

			default:
			operatorString = "eq";
			break;

		}

		if (isBinary) {
			if (this.needsGrouping(expression, expression.left)) {
				this._sb.append5("(");
			}
			this.visit(expression.left);
			if (this.needsGrouping(expression, expression.left)) {
				this._sb.append5(")");
			}
			this._sb.append5(" ");
			this._sb.append5(operatorString);
			this._sb.append5(" ");
			if (this.needsGrouping(expression, expression.right)) {
				this._sb.append5("(");
			}
			this.visit(expression.right);
			if (this.needsGrouping(expression, expression.right)) {
				this._sb.append5(")");
			}
		} else {
			if (expression.operator == FilterExpressionOperatorType.Grouping) {
				this._sb.append5("(");
			} else {
				this._sb.appendLine1(operatorString + " ");
			}
			if (expression.left != null) {
				this.visit(expression.left);
			} else {
				this.visit(expression.right);
			}
			if (expression.operator == FilterExpressionOperatorType.Grouping) {
				this._sb.append5(")");
			}
		}
	}
	private needsGrouping(expression: IFilterExpression, child: IFilterExpression): boolean {
		let expressionPrecedence = expression.precedence;
		let childPrecedence = child != null ? child.precedence : 0;
		if (child != null && child.isOperation && (<IOperationFilterExpression><any>child).operator == FilterExpressionOperatorType.Grouping) {
			return false;
		}
		return childPrecedence < expressionPrecedence;
	}
	visitFunctionExpression(expression: IFunctionFilterExpression): void {
		let functionName: string = "";
		switch (expression.functionType) {
			case FilterExpressionFunctionType.Ceiling:
			functionName = "ceiling";
			break;

			case FilterExpressionFunctionType.Concat:
			functionName = "concat";
			break;

			case FilterExpressionFunctionType.Contains:
			functionName = "contains";
			break;

			case FilterExpressionFunctionType.Day:
			functionName = "day";
			break;

			case FilterExpressionFunctionType.EndsWith:
			functionName = "endswith";
			break;

			case FilterExpressionFunctionType.Floor:
			functionName = "floor";
			break;

			case FilterExpressionFunctionType.Hour:
			functionName = "hour";
			break;

			case FilterExpressionFunctionType.IndexOf:
			functionName = "indexof";
			break;

			case FilterExpressionFunctionType.Length1:
			functionName = "length";
			break;

			case FilterExpressionFunctionType.Minute:
			functionName = "minute";
			break;

			case FilterExpressionFunctionType.Month:
			functionName = "month";
			break;

			case FilterExpressionFunctionType.Replace:
			functionName = "replace";
			break;

			case FilterExpressionFunctionType.Round:
			functionName = "round";
			break;

			case FilterExpressionFunctionType.Second:
			functionName = "second";
			break;

			case FilterExpressionFunctionType.StartsWith:
			functionName = "startswith";
			break;

			case FilterExpressionFunctionType.Substring:
			functionName = "substring";
			break;

			case FilterExpressionFunctionType.ToLower:
			functionName = "tolower";
			break;

			case FilterExpressionFunctionType.ToUpper:
			functionName = "toupper";
			break;

			case FilterExpressionFunctionType.Trim:
			functionName = "trim";
			break;

			case FilterExpressionFunctionType.Year:
			functionName = "year";
			break;

		}

		this._sb.append5(functionName);
		this._sb.append5("(");
		let first: boolean = true;
		for (let i = 0; i < expression.functionArguments.all.count; i++) {
			if (first) {
				first = false;
			} else {
				this._sb.append5(", ");
			}
			this.visit(expression.functionArguments.all.item(i));
		}
		this._sb.append5(")");
	}
	visitLiteralExpression(expression: ILiteralFilterExpression): void {
		this.renderLiteral(expression, expression.literalValue);
	}
	private renderLiteral(expression: ILiteralFilterExpression, literalValue: any): void {
		let value = this._literalEmitter.emitLiteral(literalValue, expression.leaveUnquoted);
		this._sb.append5(value);
	}
	visitPropertyReferenceExpression(expression: IPropertyReferenceFilterExpression): void {
		this.renderPropertyReference(expression.propertyReference);
	}
	private renderPropertyReference(propertyReference: string): void {
		this._sb.append5(propertyReference);
	}
}


