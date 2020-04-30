/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

export class PromiseWrapper {
    private _promise: Promise<any>;
    private _state: string = "pending";
    private _resolvedValue: any = null;
    private _rejectedError: any = null;
    private _then: ((v: any) => void)[] = [];
    private _fail: ((e: any) => void)[] = [];
    private _always: ((v: any) => void)[] = [];

    public constructor(inner: Promise<any>) {
        this._promise = inner;
        this._promise
        .then((v) => {
            this._state = "resolved";
            this._resolvedValue = v;
            for (var i = 0; i < this._then.length; i++) {
                this._then[i](v);
            }
            for (var i = 0; i < this._always.length; i++) {
                this._always[i](v);
            }
        })
        .catch((e) => {
            this._state = "rejected";
            this._rejectedError = e;
            for (var i = 0; i < this._fail.length; i++) {
                this._fail[i](e);
            }
            for (var i = 0; i < this._always.length; i++) {
                this._always[i](e);
            }
        });
    }

    state(): string {
        return this._state;
    }
    then(pass: (v) => void, fail: (e) => void): PromiseWrapper {
        this.done(pass);
        this.fail(fail);
        return this;
    }
    done(continuation: (v) => void): PromiseWrapper {
        this._then.push(continuation);
        if (this._state == "resolved") {
            continuation(this._resolvedValue);
        }
        return this;
    }
    fail(continuation: (v) => void): PromiseWrapper {
        this._fail.push(continuation);
        if (this._state == "failed") {
            continuation(this._rejectedError);
        }
        return this;
    }
    always(continuation: (v) => void): PromiseWrapper {
        this._always.push(continuation);
        if (this._state == "resolved") {
            continuation(this._resolvedValue);
        }
        if (this._state == "failed") {
            continuation(this._rejectedError);
        }
        return this;
    }
}

export class PromiseFactory {
    private _promise: Promise<any>;
    private _resolve: (v) => void;
    private _reject: (e) => void;
    private _wrapper: PromiseWrapper = null;

    resolve(result?: any): void {
        if (this._resolve) {
            this._resolve(result);
        }
    }
    reject(error: any): void { 
        if (this._reject) {
            this._reject(error);
        }
    }
    promise(): PromiseWrapper { 
        this._promise = new Promise<any>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this._wrapper = new PromiseWrapper(this._promise);
        return this._wrapper;
    }
}