/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

export class ReflectionUtil {
    static getPropertyGetter = function (type: Function, propertyName: string) {
        if (typeof type.prototype[ propertyName ] === "function") {
            return function (instance: any) {
                return type.prototype[ propertyName ].apply(instance, arguments);
            };
        }

        return function (instance: any) {
            return instance[ propertyName ];
        };
    }
}