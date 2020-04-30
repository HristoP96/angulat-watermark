/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "./type";
import { DataSourceVelocityReading } from "./DataSourceVelocityReading";
import { dateNow } from "./date";

/**
 * @hidden 
 */
export class DataSourceVelocityTracker extends Base {
	static $t: Type = markType(DataSourceVelocityTracker, 'DataSourceVelocityTracker');
	private _beginning: number = 0;
	private _ringBufferLength: number = 6;
	constructor() {
		super();
		this._beginning = this.getCurrentTime();
		this._lastTimestamp = 0;
		this.readings = <DataSourceVelocityReading[]>new Array(this._ringBufferLength);
	}
	private _readings: DataSourceVelocityReading[] = null;
	private get readings(): DataSourceVelocityReading[] {
		return this._readings;
	}
	private set readings(value: DataSourceVelocityReading[]) {
		this._readings = value;
	}
	private _currentPosition: number = 0;
	trackPoint(position: Point): void {
		let currentTime = this.getEventTime();
		this.readings[this._currentPosition] = new DataSourceVelocityReading(position, currentTime);
		this._currentPosition++;
		if (this._currentPosition > (this._ringBufferLength - 1)) {
			this._currentPosition = 0;
		}
	}
	clear(): void {
		for (let i = 0; i < this._ringBufferLength; i++) {
			this.readings[i] = null;
		}
	}
	getVelocity(): Point {
		let minTime: number = 0x7FFFFFFF;
		let maxTime: number = -2147483648;
		let minX: number = 0;
		let minY: number = 0;
		let maxX: number = 0;
		let maxY: number = 0;
		let time: number = this.getEventTime();
		for (let i = 0; i < this._ringBufferLength; i++) {
			if (this.readings[i] == null) {
				continue;
			}
			if ((time - this.readings[i].time) > 300) {
				continue;
			}
			if (this.readings[i].time < minTime) {
				minTime = this.readings[i].time;
				minX = this.readings[i].position.x;
				minY = this.readings[i].position.y;
			}
			if (this.readings[i].time > maxTime) {
				maxTime = this.readings[i].time;
				maxX = this.readings[i].position.x;
				maxY = this.readings[i].position.y;
			}
		}
		let timespan: number = maxTime - minTime;
		timespan = Math.max(timespan, 16);
		let timeDelta = <number>(timespan) / 1000;
		if (timeDelta == 0) {
			return <Point>{ $type: Point_$type, x: minX, y: minY };
		}
		return <Point>{ $type: Point_$type, x: (maxX - minX) / timeDelta, y: (maxY - minY) / timeDelta };
	}
	private _lastTimestamp: number = 0;
	private getCurrentTime(): number {
		let time: Date = dateNow();
		return time.getTime();
	}
	private getEventTime(): number {
		let newStamp: number = <number>(this.getCurrentTime() - this._beginning);
		if (newStamp == this._lastTimestamp) {
			newStamp += 1;
		}
		this._lastTimestamp = newStamp;
		return newStamp;
	}
}


