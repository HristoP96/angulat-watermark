/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Type, markType } from "./type";
import { IFilterExpression } from "./IFilterExpression";
import { InvalidOperationException } from "./InvalidOperationException";
import { IOperationFilterExpression } from "./IOperationFilterExpression";
import { IFunctionFilterExpression } from "./IFunctionFilterExpression";
import { ILiteralFilterExpression } from "./ILiteralFilterExpression";
import { IPropertyReferenceFilterExpression } from "./IPropertyReferenceFilterExpression";
import { FilterExpressionCollection } from "./FilterExpressionCollection";

/**
 * @hidden 
 */
export class FilterExpressionVisitor extends Base {
	static $t: Type = markType(FilterExpressionVisitor, 'FilterExpressionVisitor');
	visit(expression: IFilterExpression): void {
		if (expression == null) {
			throw new InvalidOperationException(1, "Expected an expression but found none");
		}
		if (expression.isOperation) {
			this.visitOperationExpression(<IOperationFilterExpression><any>expression);
		} else if (expression.isFunction) {
			this.visitFunctionExpression(<IFunctionFilterExpression><any>expression);
		} else if (expression.isLiteral) {
			this.visitLiteralExpression(<ILiteralFilterExpression><any>expression);
		} else if (expression.isPropertyReference) {
			this.visitPropertyReferenceExpression(<IPropertyReferenceFilterExpression><any>expression);
		}
	}
	visitOperationExpression(expression: IOperationFilterExpression): void {
		if (expression.left != null) {
			this.visit(expression.left);
		}
		if (expression.right != null) {
			this.visit(expression.right);
		}
	}
	visitFunctionExpression(expression: IFunctionFilterExpression): void {
		for (let i = 0; i < expression.functionArguments.all.count; i++) {
			this.visit(expression.functionArguments.all.item(i));
		}
	}
	visitLiteralExpression(expression: ILiteralFilterExpression): void {
	}
	visitPropertyReferenceExpression(expression: IPropertyReferenceFilterExpression): void {
	}
}


