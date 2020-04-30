/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IEnumerable, IEnumerator, IteratorWrapper } from "./type";

export class DictionaryUtil {
    static dictionaryCreate(capacity?: number): Map<string, any> {
        return new Map<string, any>()
    }
    static *en(map: Map<string, any>) {
        for (let item of map) {
            let [key, value] = item;
            yield { key: key, value: value };
        }
    }
    static dictionaryGetEnumerator(map: Map<string, any>): IEnumerator {
        return new IteratorWrapper(DictionaryUtil.en(map), () => DictionaryUtil.en(map))
    }
    static dictionaryGetKeys(map: Map<string, any>): IEnumerator {
        return new IteratorWrapper(map.keys(), () => map.keys());
    }
    static dictionaryGetValues(map: Map<string, any>): IEnumerator {
        return new IteratorWrapper(map.values(), () => map.values());
    }
    static dictionaryGetDictionary(obj: any): Map<string, any> {
        let map = new Map<string, any>();
        for (var p in obj) {
            map.set(p.toString(), obj[p]);
        }
        return map;
    }
}