/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, BaseError, Type, markType, typeCastObjTo$t, getBoxIfEnum } from "./type";
import { PromiseWrapper, PromiseFactory } from "./promise";
import { AggregateException } from "./AggregateException";
import { TaskStatus } from "./TaskStatus";

/**
 * @hidden 
 */
export class Task extends Base {
	static $t: Type = markType(Task, 'Task');
	private _promise: PromiseWrapper = null;
	get promise(): PromiseWrapper {
		return this._promise;
	}
	set promise(value: PromiseWrapper) {
		this._promise = value;
	}
	private _isCanceled: boolean = false;
	get isCanceled(): boolean {
		return this._isCanceled;
	}
	set isCanceled(value: boolean) {
		this._isCanceled = value;
	}
	private _exception: AggregateException = null;
	get exception(): AggregateException {
		return this._exception;
	}
	set exception(value: AggregateException) {
		this._exception = value;
	}
	constructor(initNumber: number, promise: PromiseWrapper);
	constructor(initNumber: number, promise: PromiseWrapper, state: any);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let promise: PromiseWrapper = <PromiseWrapper>_rest[0];
				let $outerArgs = <any[]>[ promise, null ];
				{
					let promise: PromiseWrapper = <PromiseWrapper>$outerArgs[0];
					let state: any = <any>$outerArgs[1];
					let doneContinuation: () => void = () => {
					};
					let failContinuation: (arg1: BaseError) => void = (exception: BaseError) => {
						if (exception == null) {
							this.isCanceled = true;
						} else {
							this.exception = new AggregateException(2, "Exception occurred during task execution", exception);
						}
					};
					this.promise = promise.done(doneContinuation).fail(failContinuation);
					this.asyncState = state;
				}
			}
			break;

			case 1:
			{
				let promise: PromiseWrapper = <PromiseWrapper>_rest[0];
				let state: any = <any>_rest[1];
				let doneContinuation: () => void = () => {
				};
				let failContinuation: (arg1: BaseError) => void = (exception: BaseError) => {
					if (exception == null) {
						this.isCanceled = true;
					} else {
						this.exception = new AggregateException(2, "Exception occurred during task execution", exception);
					}
				};
				this.promise = promise.done(doneContinuation).fail(failContinuation);
				this.asyncState = state;
			}
			break;

		}

	}
	get isCompleted(): boolean {
		return this.status == TaskStatus.RanToCompletion || this.status == TaskStatus.Faulted || this.status == TaskStatus.Canceled;
	}
	get status(): TaskStatus {
		if (this.isCanceled) {
			return TaskStatus.Canceled;
		}
		switch (this.promise.state()) {
			case "pending": return TaskStatus.Created;
			case "resolved": return TaskStatus.RanToCompletion;
			case "rejected": return TaskStatus.Faulted;
			default: return TaskStatus.Created;
		}

	}
	private _asyncState: any = null;
	get asyncState(): any {
		return this._asyncState;
	}
	set asyncState(value: any) {
		this._asyncState = value;
	}
	continueWith(continuationAction: (arg1: Task) => void): Task {
		let doneContinuation: () => void = () => continuationAction(this);
		let failContinuation: (arg1: BaseError) => void = (exception: BaseError) => continuationAction(this);
		let continuationPromise = this.promise.done(doneContinuation).fail(failContinuation);
		return new Task(0, continuationPromise);
	}
	continueWith$1<TNewResult>($tNewResult: Type, continuationFunction: (arg1: Task) => TNewResult): Task$1<TNewResult> {
		let tcs: TaskCompletionSource$1<TNewResult> = new TaskCompletionSource$1<TNewResult>($tNewResult, 0);
		let continuation: () => void = () => {
			try {
				let newResult: TNewResult = continuationFunction(this);
				tcs.setResult(newResult);
			}
			catch (ex) {
				tcs.setException(<BaseError>(ex));
			}
		};
		let doneContinuation: (arg1: any) => void = (res: any) => continuation();
		let failContinuation: (arg1: any) => void = (exc: any) => continuation();
		this.promise.done(doneContinuation).fail(failContinuation);
		return tcs.task;
	}
}

/**
 * @hidden 
 */
export class Task$1<TResult> extends Task {
	static $t: Type = markType(Task$1, 'Task$1', (<any>Task).$type);
	protected $tResult: Type = null;
	constructor($tResult: Type, promise: PromiseWrapper, state: any) {
		super(1, promise, state);
		this.$tResult = $tResult;
		this.$type = this.$type.specialize(this.$tResult);
		let doneContinuation: (arg1: any) => void = (res: any) => {
			let result: TResult = typeCastObjTo$t<TResult>(this.$tResult, res);
			this._result = result;
			this._resultReady = true;
		};
		let failContinuation: (arg1: any) => void = (exc: any) => this._resultReady = true;
		this.promise.done(doneContinuation).fail(failContinuation);
	}
	private _resultReady: boolean = false;
	private _result: TResult = null;
	get result(): TResult {
		if (!this._resultReady) {
			throw 'Result is not ready yet';
		}
		if (this.exception != null) {
			throw this.exception;
		}
		return this._result;
	}
	continueWith1(continuationAction: (arg1: Task$1<TResult>) => void): Task {
		return super.continueWith((t: Task) => continuationAction(<Task$1<TResult>>t));
	}
	continueWith$11<TNewResult>($tNewResult: Type, continuationFunction: (arg1: Task$1<TResult>) => TNewResult): Task$1<TNewResult> {
		let wrapperFunction: (arg1: Task) => any = (t: Task) => getBoxIfEnum<TNewResult>($tNewResult, continuationFunction(<Task$1<TResult>>t));
		return this.continueWithBase$1<any>((<any>Base).$type, wrapperFunction).continueWithBase$1<TNewResult>($tNewResult, (t: Task) => typeCastObjTo$t<TNewResult>($tNewResult, (<Task$1<any>>t).result));
	}
	private continueWithBase$1<TNewResult>($tNewResult: Type, continuationFunction: (arg1: Task) => TNewResult): Task$1<TNewResult> {
		return super.continueWith$1<TNewResult>($tNewResult, continuationFunction);
	}
}

/**
 * @hidden 
 */
export class TaskCompletionSource$1<TResult> extends Base {
	static $t: Type = markType(TaskCompletionSource$1, 'TaskCompletionSource$1');
	protected $tResult: Type = null;
	private _deferred: PromiseFactory = null;
	get deferred(): PromiseFactory {
		return this._deferred;
	}
	set deferred(value: PromiseFactory) {
		this._deferred = value;
	}
	constructor($tResult: Type, initNumber: number);
	constructor($tResult: Type, initNumber: number, state: any);
	constructor($tResult: Type, initNumber: number, ..._rest: any[]);
	constructor($tResult: Type, initNumber: number, ..._rest: any[]) {
		super();
		this.$tResult = $tResult;
		this.$type = this.$type.specialize(this.$tResult);
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ null ];
				{
					let state: any = <any>$outerArgs[0];
					this.deferred = new PromiseFactory();
					this.task = new Task$1<TResult>(this.$tResult, this.deferred.promise(), state);
				}
			}
			break;

			case 1:
			{
				let state: any = <any>_rest[0];
				this.deferred = new PromiseFactory();
				this.task = new Task$1<TResult>(this.$tResult, this.deferred.promise(), state);
			}
			break;

		}

	}
	setCanceled(): void {
		this.deferred.reject(null);
	}
	setException(exception: BaseError): void {
		this.deferred.reject(exception);
	}
	setResult(result: TResult): void {
		this.deferred.resolve(getBoxIfEnum<TResult>(this.$tResult, result));
	}
	private _task: Task$1<TResult> = null;
	get task(): Task$1<TResult> {
		return this._task;
	}
	set task(value: Task$1<TResult>) {
		this._task = value;
	}
}


