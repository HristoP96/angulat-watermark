/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, BaseError, Type, markType } from "./type";
import { Encoding } from "./Encoding";
import { WebHeaderCollection } from "./WebHeaderCollection";
import { ICredentials } from "./ICredentials";
import { UploadStringCompletedEventArgs } from "./UploadStringCompletedEventArgs";
import { Uri } from "./Uri";
import { Task } from "./Task";
import { Task$1 } from "./Task$1";
import { PromiseWrapper } from "./promise";
import { NameValueCollection } from "./NameValueCollection";
import { UploadDataCompletedEventArgs } from "./UploadDataCompletedEventArgs";
import { TaskCompletionSource$1 } from "./TaskCompletionSource$1";
import { TaskStatus } from "./TaskStatus";
import { NotImplementedException } from "./NotImplementedException";

/**
 * @hidden 
 */
export class WebClient extends Base {
	static $t: Type = markType(WebClient, 'WebClient');
	constructor() {
		super();
		this.headers = new WebHeaderCollection();
	}
	private _encoding: Encoding = null;
	get encoding(): Encoding {
		return this._encoding;
	}
	set encoding(value: Encoding) {
		this._encoding = value;
	}
	private _headers: WebHeaderCollection = null;
	get headers(): WebHeaderCollection {
		return this._headers;
	}
	set headers(value: WebHeaderCollection) {
		this._headers = value;
	}
	private _credentials: ICredentials = null;
	get credentials(): ICredentials {
		return this._credentials;
	}
	set credentials(value: ICredentials) {
		this._credentials = value;
	}
	uploadStringCompleted: (sender: any, e: UploadStringCompletedEventArgs) => void = null;
	uploadStringAsync(address: Uri, method: string, data: string, userData: any): void {
		this.uploadStringTaskAsync(address, method, data).continueWith1((t: Task$1<string>) => {
			if (this.uploadStringCompleted != null) {
				let result: string = null;
				let exception: BaseError = null;
				try {
					result = t.result;
				}
				catch (ex) {
					exception = <BaseError>(ex);
				}
				this.uploadStringCompleted(this, new UploadStringCompletedEventArgs(result, exception, t.status == TaskStatus.Canceled, userData));
			}
		});
	}
	uploadStringTaskAsync(address: Uri, method: string, data: string): Task$1<string> {
		let url_: string = address.value;
		let method_: string = method;
		let data_: string = data;
		let contentType_: string = this.headers.item("Content-Type");
		let credentials_: ICredentials = this.credentials;
		throw new NotImplementedException(0);
	}
	uploadDataCompleted: (sender: any, e: UploadDataCompletedEventArgs) => void = null;
	uploadDataAsync(address: Uri, method: string, data: string, userData: any): void {
		this.uploadDataTaskAsync(address, method, data).continueWith1((t: Task$1<number[]>) => {
			if (this.uploadDataCompleted != null) {
				let result: number[] = null;
				let exception: BaseError = null;
				try {
					result = t.result;
				}
				catch (ex) {
					exception = <BaseError>(ex);
				}
				this.uploadDataCompleted(this, new UploadDataCompletedEventArgs(result, exception, t.status == TaskStatus.Canceled, userData));
			}
		});
	}
	uploadDataTaskAsync(address: Uri, method: string, data: string): Task$1<number[]> {
		let url_: string = address.value;
		let method_: string = method;
		let data_: string = data;
		let contentType_: string = this.headers.item("Content-Type");
		let credentials_: ICredentials = this.credentials;
		throw new NotImplementedException(0);
	}
	private onSuccess(tcs: TaskCompletionSource$1<string>, data: any, textStatus: any, jqXHR: any): void {
		tcs.setResult(<string>data);
	}
	private onError(tcs: TaskCompletionSource$1<string>, jqXHR: any, textStatus: any, errorThrown: any): void {
		tcs.setException(new BaseError(1, <string>errorThrown));
	}
}


