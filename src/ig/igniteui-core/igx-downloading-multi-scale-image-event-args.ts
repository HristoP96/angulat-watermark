import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { DownloadingMultiScaleImageEventArgs as DownloadingMultiScaleImageEventArgs_internal } from "./DownloadingMultiScaleImageEventArgs";

export class IgxDownloadingMultiScaleImageEventArgs
{

protected createImplementation() : DownloadingMultiScaleImageEventArgs_internal
{
	return new DownloadingMultiScaleImageEventArgs_internal();
}
	protected _implementation: any;
	public get i() : DownloadingMultiScaleImageEventArgs_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {
	this._implementation = this.createImplementation();
	(<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	get image() : HTMLImageElement {
		return <HTMLImageElement>this.i.image;
	}
	set image(v: HTMLImageElement) {
		this.i.image = v;
	}
    	get uri() : string {
		return (this.i.uri as string);
	}
	set uri(v: string) {
		this.i.uri = v;
	}

    

    

}
