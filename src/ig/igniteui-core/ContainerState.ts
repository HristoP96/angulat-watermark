/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Number_$type, String_$type, Type, markType } from "./type";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { Dictionary$2 } from "./Dictionary$2";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";

/**
 * @hidden 
 */
export class ContainerState extends Base {
	static $t: Type = markType(ContainerState, 'ContainerState');
	private _container: any = null;
	get container(): any {
		return this._container;
	}
	set container(value: any) {
		this._container = value;
	}
	private _components: Dictionary$2<number, any> = new Dictionary$2<number, any>(Number_$type, (<any>Base).$type, 0);
	private _ids: Dictionary$2<any, number> = new Dictionary$2<any, number>((<any>Base).$type, Number_$type, 0);
	private _componentNames: Dictionary$2<number, string> = new Dictionary$2<number, string>(Number_$type, String_$type, 0);
	addComponent(id: number, component: any, fromNode: DescriptionTreeNode, provideRefValue: (arg1: string, arg2: any, arg3: boolean) => void): void {
		if (fromNode.has("Name")) {
			this._componentNames.item(id, <string>fromNode.get("Name").value);
			provideRefValue(this._componentNames.item(id), component, false);
		}
		this._components.item(id, component);
		this._ids.item(component, id);
	}
	getComponent(id: number): any {
		return this._components.item(id);
	}
	removeComponent(id: number, removeRefValue: (arg1: string, arg2: boolean) => void): void {
		let component = this._components.item(id);
		this._ids.removeItem(component);
		this._components.removeItem(id);
		if (this._componentNames.containsKey(id)) {
			let name = this._componentNames.item(id);
			this._componentNames.removeItem(id);
			removeRefValue(name, false);
		}
	}
	getComponentId(current: any): number {
		if (this._ids.containsKey(current)) {
			return this._ids.item(current);
		}
		return -1;
	}
}


