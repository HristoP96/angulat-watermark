/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ExpressionSyntax } from "./ExpressionSyntax";
import { Type, Base } from "./type";

/**
 * @hidden 
 */
export interface IQueryable { 
	readonly expressionSyntax: ExpressionSyntax;
readonly elementType: Type;
readonly provider: IQueryProvider;
}

/**
 * @hidden 
 */
export let IQueryable_$type = new Type(null, 'IQueryable');

/**
 * @hidden 
 */
export interface IQueryable$1<T> extends IQueryable { 
}

/**
 * @hidden 
 */
export let IQueryable$1_$type = new Type(null, 'IQueryable$1', null, [IQueryable_$type]);

/**
 * @hidden 
 */
export interface IQueryProvider { 
	createQuery(ExpressionSyntax: ExpressionSyntax): IQueryable;
createQuery$1<TElement>($tElement: Type, ExpressionSyntax: ExpressionSyntax): IQueryable$1<TElement>;
execute(ExpressionSyntax: ExpressionSyntax): any;
execute$1<TResult>($tResult: Type, ExpressionSyntax: ExpressionSyntax): TResult;
}

/**
 * @hidden 
 */
export let IQueryProvider_$type = new Type(null, 'IQueryProvider');


