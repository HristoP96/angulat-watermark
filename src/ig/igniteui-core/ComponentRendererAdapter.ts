import { IComponentRendererAdapter } from "./IComponentRendererAdapter";
import { TypeDescriptionContext } from './TypeDescriptionContext';
import { TypeDescriptionMetadata } from './TypeDescriptionMetadata';
import { IgCollection } from './IgCollection';
import { TypeRegistrar } from './type';
import { IgxComponentRendererContainerComponent } from './igx-component-renderer-container-component';


export class ComponentRendererAdapter implements IComponentRendererAdapter {
    createObject(type: string, container: any, context: TypeDescriptionContext) {
        let typeName = "Igx" + type + "Component";
        if (TypeRegistrar.isRegistered(typeName)) {
            return TypeRegistrar.create(typeName);
        }
        if (TypeRegistrar.isRegistered(type)) {
            return TypeRegistrar.create(type);
        }
    }

    private _platform = "Igx";

    //createRootObject(type: string, container: any, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void) {
    //    let typeName = "Igr" + type;
    //    if (TypeRegistrar.isRegistered(typeName)) {
    //        let t = TypeRegistrar.get(typeName);

    //        let crc = container as IgrComponentRendererContainer;
    //        crc.createRootObject(t, continueActions);
    //    }
    //}

    createColorCollection(colors: any[]) {
        return colors;
    }
    createBrushCollection(brushes: any[]) {
        return brushes;
    }
    coerceToEnum(type: string, context: TypeDescriptionContext, value: string) {
        return value;
    }
    onUIThread(container: any, action: () => void): void {
        action();
    }
    setOrUpdateCollectionOnTarget(container: any, propertyName: string, propertyMetadata: TypeDescriptionMetadata, context: TypeDescriptionContext, target: any, value: any): void {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.clear();
            let newArr: any[] = value;
            for (let i = 0; i < newArr.length; i++) {
                coll.add(newArr[i]);
            }
        } else if (Array.isArray(coll)) {
            this.setPropertyValue(target, propertyName, value, coll)
        } else {
            if (coll.clear !== undefined) {
                coll.clear();
            }
            if (coll.add !== undefined) {
                let newArr: any[] = value;
                for (let i = 0; i < newArr.length; i++) {
                    coll.add(newArr[i]);
                }
            }
        }
    }
    setPropertyValue(target: any, propertyName: string, value: any, oldValue: any): void {
        if (this._platform == "Igx" &&
            (IgxComponentRendererContainerComponent as any).isEvent &&
            (IgxComponentRendererContainerComponent as any).isEvent(target[propertyName])) {
            if (target["_" + propertyName + "Subscription"]) {
                target["_" + propertyName + "Subscription"]();
                target["_" + propertyName + "Subscription"] = null;
            }
            var fun = function (ev: any) {
                value(ev.sender, ev.args);
            }
            var sub = target[propertyName].subscribe(fun);
            target["_" + propertyName + "Subscription"] = sub;
            return;
        }

        target[propertyName] = value;
    }
    getPropertyValue(target: any, propertyName: string) {
        return target[propertyName];
    }
    clearContainer(container: any, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void): void {
        if (this._platform === "Igc") {
            let crc = (IgxComponentRendererContainerComponent as any).fromElement(container);
            crc.clearContainer(continueActions);
            return;
        }
        let crc = container as IgxComponentRendererContainerComponent;
        crc.clearContainer(continueActions);
    }
    getRootObject(container: any) {
        if (this._platform === "Igc") {
            let crc = (IgxComponentRendererContainerComponent as any).fromElement(container);
            return crc.getRootObject();
        }
        let crc = container as IgxComponentRendererContainerComponent;

        return crc.getRootObject();
    }
    clearCollection(target: any, propertyName: string, metadata: TypeDescriptionMetadata): void {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.clear();
        } else if (Array.isArray(coll)) {
            this.setPropertyValue(target, propertyName, [], coll)
        } else {
            if (coll.clear !== undefined) {
                coll.clear();
            }
        }
    }
    addItemToCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, newIndex: number, item: any): void {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.insert(newIndex, item);
        } else if (Array.isArray(coll)) {
            let newArr = [];
            for (let i = 0; i < coll.length; i++) {
                newArr[i] = coll[i];
            }
            newArr.splice(newIndex, 0, item);
            this.setPropertyValue(target, propertyName, newArr, coll)
        } else {
            if (coll.insert !== undefined) {
                coll.insert(newIndex, item);
            }
        }
    }
    resetPropertyOnTarget(container: any, propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any): void {
        //TODO: anything we can do here? store default?
    }
    replaceItemInCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, newIndex: number, item: any): void {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.item(newIndex, item);
        } else if (Array.isArray(coll)) {
            let newArr = [];
            for (let i = 0; i < coll.length; i++) {
                newArr[i] = coll[i];
            }
            newArr[newIndex] = item;
            this.setPropertyValue(target, propertyName, newArr, coll)
        } else {
            if (coll.item !== undefined) {
                coll.item(newIndex, item);
            }
        }
    }
    removeItemFromCollection(propertyName: string, propertyMetadata: TypeDescriptionMetadata, target: any, oldIndex: number): void {
        let coll = this.getPropertyValue(target, propertyName);
        if (coll instanceof IgCollection) {
            coll.removeAt(oldIndex);
        } else if (Array.isArray(coll)) {
            let newArr = [];
            for (let i = 0; i < coll.length; i++) {
                newArr[i] = coll[i];
            }
            newArr.splice(oldIndex, 1);
            this.setPropertyValue(target, propertyName, newArr, coll)
        } else {
            if (coll.removeAt !== undefined) {
                coll.removeAt(oldIndex);
            }
        }
    }
    replaceRootItem(container: any, type: string, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void): void {
        let typeName = "Igx" + type + "Component";
        if (TypeRegistrar.isRegistered(typeName)) {
            let t = TypeRegistrar.get(typeName);

            if (this._platform === "Igc") {
                let crc = (IgxComponentRendererContainerComponent as any).fromElement(container);
                crc.replaceRootItem(t, continueActions);
                return;
            }

            let crc = container as IgxComponentRendererContainerComponent;
            crc.replaceRootItem(t, continueActions);
        } else {

            if (this._platform === "Igc") {
                let crc = (IgxComponentRendererContainerComponent as any).fromElement(container);
                crc.clearContainer(continueActions);
                return;
            }

            let crc = container as IgxComponentRendererContainerComponent;
            crc.clearContainer(continueActions);
        }
    }
    removeRootItem(container: any, context: TypeDescriptionContext, continueActions: (resumeRequired: boolean) => void): void {
        this.clearContainer(container, context, continueActions);
    }
    flushChanges(container: any): void {

    }



}