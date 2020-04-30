/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, BaseError, getBoxIfEnum, typeCastObjTo$t, Type, markType } from "./type";
import { Task } from "./Task";
import { PromiseWrapper } from "./promise";
import { Task$1 } from "./Task$1";
import { TaskCompletionSource$1 } from "./TaskCompletionSource$1";

/**
 * @hidden 
 */
export class TaskFactory extends Base {
	static $t: Type = markType(TaskFactory, 'TaskFactory');
	continueWhenAll(tasks: Task[], continuationAction: (arg1: Task[]) => void): Task {
		return new Task(0, this.whenAll(this.getPromises(tasks)).always(() => continuationAction(tasks)));
	}
	continueWhenAll$1<TResult>($tResult: Type, tasks: Task[], continuationFunction: (arg1: Task[]) => TResult): Task$1<TResult> {
		let tcs: TaskCompletionSource$1<TResult> = new TaskCompletionSource$1<TResult>($tResult, 0);
		this.whenAll(this.getPromises(tasks)).always(() => {
			try {
				let result: TResult = continuationFunction(tasks);
				tcs.setResult(result);
			}
			catch (ex) {
				tcs.setException(<BaseError>(ex));
			}
		});
		return tcs.task;
	}
	continueWhenAll$2<TAntecedentResult, TResult>($tAntecedentResult: Type, $tResult: Type, tasks: Task$1<TAntecedentResult>[], continuationFunction: (arg1: Task$1<TAntecedentResult>[]) => TResult): Task$1<TResult> {
		let wrapperFunction: (arg1: Task[]) => any = (t: Task[]) => getBoxIfEnum<TResult>($tResult, continuationFunction(<Task$1<TAntecedentResult>[]>t));
		return this.continueWhenAll$1<any>((<any>Base).$type, <Task[]>tasks, wrapperFunction).continueWith$11<TResult>($tResult, (t: Task$1<any>) => typeCastObjTo$t<TResult>($tResult, t.result));
	}
	private getPromises(tasks: Task[]): PromiseWrapper[] {
		let promises: PromiseWrapper[] = <PromiseWrapper[]>new Array(tasks.length);
		for (let i: number = 0; i < tasks.length; i++) {
			promises[i] = tasks[i].promise;
		}
		return promises;
	}
	private whenAll(promises: PromiseWrapper[]): PromiseWrapper {
		let promises_: PromiseWrapper[] = promises;
		let whenPromise: PromiseWrapper = null;
		return whenPromise;
	}
}


