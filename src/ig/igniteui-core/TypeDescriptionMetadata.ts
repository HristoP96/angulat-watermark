/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionWellKnownType } from "./TypeDescriptionWellKnownType";
import { TypeDescriptionPlatform, TypeDescriptionPlatform_$type } from "./TypeDescriptionPlatform";
import { Dictionary$2 } from "./Dictionary$2";
import { stringContains } from "./string";

/**
 * @hidden 
 */
export class TypeDescriptionMetadata extends Base {
	static $t: Type = markType(TypeDescriptionMetadata, 'TypeDescriptionMetadata');
	private _owningType: string = null;
	get owningType(): string {
		return this._owningType;
	}
	set owningType(value: string) {
		this._owningType = value;
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _knownType: TypeDescriptionWellKnownType = <TypeDescriptionWellKnownType>0;
	get knownType(): TypeDescriptionWellKnownType {
		return this._knownType;
	}
	set knownType(value: TypeDescriptionWellKnownType) {
		this._knownType = value;
	}
	private _specificType: string = null;
	get specificType(): string {
		return this._specificType;
	}
	set specificType(value: string) {
		this._specificType = value;
	}
	private _specificExternalType: string = null;
	get specificExternalType(): string {
		return this._specificExternalType;
	}
	set specificExternalType(value: string) {
		this._specificExternalType = value;
	}
	private _collectionElementType: string = null;
	get collectionElementType(): string {
		return this._collectionElementType;
	}
	set collectionElementType(value: string) {
		this._collectionElementType = value;
	}
	private _mappings: Dictionary$2<TypeDescriptionPlatform, string> = new Dictionary$2<TypeDescriptionPlatform, string>(TypeDescriptionPlatform_$type, String_$type, 0);
	private _transformNames: Dictionary$2<TypeDescriptionPlatform, string> = new Dictionary$2<TypeDescriptionPlatform, string>(TypeDescriptionPlatform_$type, String_$type, 0);
	addMapping(platform: TypeDescriptionPlatform, platName: string): void {
		if (stringContains(platName, "/")) {
			let platNameParts = platName.split('/');
			this._transformNames.item(platform, platNameParts[1].trim());
			this._mappings.item(platform, platNameParts[0].trim());
		} else {
			this._mappings.item(platform, platName.trim());
		}
	}
	static camelize(name: string): string {
		return name.substr(0, 1).toLowerCase() + name.substr(1);
	}
	getPlatformName(platform: TypeDescriptionPlatform): string {
		let name = "";
		if (this._mappings.containsKey(platform)) {
			name = this._mappings.item(platform);
		} else {
			name = this.propertyName;
		}
		if (TypeDescriptionMetadata.shouldCamelize(platform)) {
			return TypeDescriptionMetadata.camelize(name);
		}
		return name;
	}
	static shouldCamelize(platform: TypeDescriptionPlatform): boolean {
		if (platform == TypeDescriptionPlatform.Angular || platform == TypeDescriptionPlatform.JQuery || platform == TypeDescriptionPlatform.WebComponents || platform == TypeDescriptionPlatform.React) {
			return true;
		}
		return false;
	}
	getTransformName(platform: TypeDescriptionPlatform): string {
		if (this._transformNames.containsKey(platform)) {
			return this._transformNames.item(platform);
		} else {
			return null;
		}
	}
}


