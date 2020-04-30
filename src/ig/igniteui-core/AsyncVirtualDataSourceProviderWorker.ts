/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, runOn, typeCast, Type, markType } from "./type";
import { AsyncDataSourcePageRequest } from "./AsyncDataSourcePageRequest";
import { IDataSourcePage } from "./IDataSourcePage";
import { WeakReference } from "./WeakReference";
import { IDataSourceExecutionContext, IDataSourceExecutionContext_$type } from "./IDataSourceExecutionContext";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { AsyncVirtualDataSourceDataProviderWorkerSettings } from "./AsyncVirtualDataSourceDataProviderWorkerSettings";
import { LinkedList$1 } from "./LinkedList$1";
import { List$1 } from "./List$1";
import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { AsyncVirtualDataSourceProviderTaskDataHolder } from "./AsyncVirtualDataSourceProviderTaskDataHolder";
import { AsyncDataSourcePageTaskHolder } from "./AsyncDataSourcePageTaskHolder";
import { AsyncVirtualDataTask } from "./AsyncVirtualDataTask";

/**
 * @hidden 
 */
export class AsyncVirtualDataSourceProviderWorker extends Base {
	static $t: Type = markType(AsyncVirtualDataSourceProviderWorker, 'AsyncVirtualDataSourceProviderWorker');
	constructor(settings: AsyncVirtualDataSourceDataProviderWorkerSettings) {
		super();
		this._running = true;
		this._pageSizeRequested = settings.pageSizeRequested;
		this._actualPageSize = this._pageSizeRequested;
		this._timeoutMilliseconds = settings.timeoutMilliseconds;
		this._pageLoaded = new WeakReference(settings.pageLoaded);
		this._executionContext = new WeakReference(settings.executionContext);
	}
	private _requests: LinkedList$1<AsyncDataSourcePageRequest> = new LinkedList$1<AsyncDataSourcePageRequest>((<any>AsyncDataSourcePageRequest).$type);
	private _tasks: IList$1<AsyncDataSourcePageRequest> = new List$1<AsyncDataSourcePageRequest>((<any>AsyncDataSourcePageRequest).$type, 0);
	protected static readonly maxSimultaneousExecutingTasks: number = 2;
	protected static readonly maxRetryDelay: number = 20000;
	protected static readonly initialRetryDelay: number = 200;
	protected syncLock: any = {};
	private _running: boolean = true;
	private _pageSizeRequested: number = 0;
	private _actualPageSize: number = 0;
	private _timeoutMilliseconds: number = 0;
	private _actualSchema: IDataSourceSchema = null;
	private _actualCount: number = -1;
	private _pageLoaded: WeakReference = null;
	private _executionContext: WeakReference = null;
	private _populatedActualPageSize: boolean = false;
	protected get tasks(): IList$1<AsyncDataSourcePageRequest> {
		return this._tasks;
	}
	protected get pageLoaded(): (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void {
		if (this._pageLoaded == null) {
			return null;
		}
		return <(page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void>this._pageLoaded.target;
	}
	protected get executionContext(): IDataSourceExecutionContext {
		if (this._executionContext == null) {
			return null;
		}
		return <IDataSourceExecutionContext><any>this._executionContext.target;
	}
	protected get actualPageSize(): number {
		return this._actualPageSize;
	}
	protected set actualPageSize(value: number) {
		this._actualPageSize = value;
	}
	protected get actualCount(): number {
		return this._actualCount;
	}
	protected set actualCount(value: number) {
		this._actualCount = value;
	}
	protected get actualSchema(): IDataSourceSchema {
		return this._actualSchema;
	}
	protected set actualSchema(value: IDataSourceSchema) {
		this._actualSchema = value;
	}
	protected get populatedActualPageSize(): boolean {
		return this._populatedActualPageSize;
	}
	protected set populatedActualPageSize(value: boolean) {
		this._populatedActualPageSize = value;
	}
	get isRunning(): boolean {
		return this._running;
	}
	set isRunning(value: boolean) {
		this._running = value;
	}
	addPageRequest(pageIndex: number, priority: DataSourcePageRequestPriority): boolean {
		return this.addPageRequestWithRetry(pageIndex, priority, AsyncVirtualDataSourceProviderWorker.initialRetryDelay);
	}
	addPageRequestWithRetry(pageIndex: number, priority: DataSourcePageRequestPriority, retryDelay: number): boolean {
		if (this.isShutdown) {
			return false;
		}
		if (priority == DataSourcePageRequestPriority.High) {
			this._requests.addFirst(new AsyncDataSourcePageRequest(pageIndex, retryDelay));
		} else {
			this._requests.addLast(new AsyncDataSourcePageRequest(pageIndex, retryDelay));
		}
		return true;
	}
	removePageRequest(pageIndex: number): void {
		let toRemove: LinkedListNode$1<AsyncDataSourcePageRequest> = null;
		let current: LinkedListNode$1<AsyncDataSourcePageRequest> = this._requests.first;
		while (current != null) {
			let currRequest = current.value;
			if (currRequest.index == pageIndex) {
				toRemove = current;
				break;
			}
			current = current.next;
		}
		if (toRemove != null) {
			this._requests.remove(toRemove);
		}
	}
	private _isShutdown: boolean = false;
	get isShutdown(): boolean {
		return this._isShutdown;
	}
	set isShutdown(value: boolean) {
		this._isShutdown = value;
	}
	removeAllPageRequests(): void {
		this._requests.clear();
	}
	shutdown(): void {
		this._pageLoaded = null;
		this._executionContext = null;
		this.isShutdown = true;
		this._running = false;
	}
	protected initialize(): void {
	}
	protected getTaskDataHolder(): AsyncVirtualDataSourceProviderTaskDataHolder {
		return null;
	}
	protected getTasksData(holder: AsyncVirtualDataSourceProviderTaskDataHolder): void {
	}
	protected removeCompletedTaskData(taskDataHolder: AsyncVirtualDataSourceProviderTaskDataHolder, completed: number): void {
	}
	protected getCompletedTaskData(taskDataHolder: AsyncVirtualDataSourceProviderTaskDataHolder, completed: number): void {
	}
	protected runATask(): void {
		for (let i = 0; i < this._tasks.count; i++) {
			if (!this._tasks.item(i).taskHolder.task.isRunning && !this._tasks.item(i).isDone && !this._tasks.item(i).taskHolder.task.isCompleted && !this._tasks.item(i).taskHolder.task.isCancelled) {
				this._tasks.item(i).taskHolder.task.isRunning = true;
				this._tasks.item(i).taskHolder.task.run();
				break;
			}
		}
	}
	protected checkAndPotentiallyWaitOnTasks(currentTasks: AsyncDataSourcePageRequest[]): number {
		this.runATask();
		for (let i: number = 0; i < currentTasks.length; i++) {
			if (currentTasks[i].isDone || currentTasks[i].taskHolder.task.isCompleted || currentTasks[i].taskHolder.task.isCancelled) {
				return i;
			}
		}
		return -1;
	}
	private _initialized: boolean = false;
	protected doWork(): void {
		if (!this._initialized) {
			this._initialized = true;
			this.initialize();
		}
		{
			let currentTasks: AsyncDataSourcePageRequest[] = null;
			let taskDataHolder: AsyncVirtualDataSourceProviderTaskDataHolder = null;
			let count = this._tasks.count;
			if (this._requests.first != null && count < AsyncVirtualDataSourceProviderWorker.maxSimultaneousExecutingTasks) {
				let request = this._requests.first;
				this._requests.removeFirst();
				this.makeTaskForRequest(request.value, request.value.retryDelay);
				count = this._tasks.count;
			}
			if (count > 0) {
				currentTasks = <AsyncDataSourcePageRequest[]>new Array(count);
				for (let i = 0; i < count; i++) {
					currentTasks[i] = this._tasks.item(i);
				}
				taskDataHolder = this.getTaskDataHolder();
				this.getTasksData(taskDataHolder);
			}
			if (currentTasks != null && currentTasks.length > 0) {
				let completed: number = this.checkAndPotentiallyWaitOnTasks(currentTasks);
				if (!this._running) {
					return;
				}
				if (completed >= 0) {
					let completedTask = currentTasks[completed];
					this.getCompletedTaskData(taskDataHolder, completed);
					this._tasks.remove(completedTask);
					this.removeCompletedTaskData(taskDataHolder, completed);
					this.processCompletedTask(completedTask.taskHolder, completedTask.retryDelay, completedTask.index, taskDataHolder);
				}
			} else {
			}
			if (!this._running) {
				return;
			}
			if (this._running) {
				window.setTimeout(runOn(this, this.doWork), 100);
			}
		}
	}
	protected makeTaskForRequest(request: AsyncDataSourcePageRequest, retryDelay: number): void {
	}
	protected processCompletedTask(task: AsyncDataSourcePageTaskHolder, retryDelay: number, index: number, taskDataHolder: AsyncVirtualDataSourceProviderTaskDataHolder): void {
	}
	protected retryIndex(pageIndex: number, currentDelay: number): void {
		let nextDelay: number = currentDelay * 2;
		if (currentDelay > AsyncVirtualDataSourceProviderWorker.maxRetryDelay) {
			this.removePageRequest(pageIndex);
		}
		if (this._executionContext == null) {
			this.shutdown();
			return;
		}
		let context: IDataSourceExecutionContext = typeCast<IDataSourceExecutionContext>(IDataSourceExecutionContext_$type, this._executionContext.target);
		if (context == null) {
			this.shutdown();
			return;
		}
		context.executeDelayed(() => this.addPageRequestWithRetry(pageIndex, DataSourcePageRequestPriority.Low, nextDelay), currentDelay);
	}
	protected isLastPage(pageIndex: number): boolean {
		if (this._actualCount < 0) {
			return false;
		}
		if ((this._actualCount - (pageIndex * this._actualPageSize)) < this._actualPageSize) {
			return true;
		}
		return false;
	}
}


